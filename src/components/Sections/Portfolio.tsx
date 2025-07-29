import {ArrowTopRightOnSquareIcon, XMarkIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';
import Link from 'next/link';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const openModal = useCallback((item: PortfolioItem) => {
    if (item.url && item.url.startsWith('http')) {
      setSelectedProject(item);
    }
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, closeModal]);

  return (
    <Section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4 lg:text-4xl">Featured Projects</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg">
            A collection of projects showcasing my passion for technology and innovation. Click on any project to explore it in detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="group" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg shadow-black/30 cursor-pointer',
                    'transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/50',
                    'bg-gradient-to-br from-neutral-700 to-neutral-800'
                  )}
                  onClick={() => openModal(item)}>
                  <Image
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    placeholder="blur"
                    src={image}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <ItemOverlay item={item} onOpenModal={openModal} />
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            href="/MondayNightGroup"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View Monday Night Group App
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem; onOpenModal: (item: PortfolioItem) => void}> = memo(({item: {url, title, description}, item, onOpenModal}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.preventDefault();
      if (mobile && !showOverlay) {
        setShowOverlay(!showOverlay);
      } else if (url && url.startsWith('http')) {
        onOpenModal(item);
      } else if (url) {
        window.open(url, '_blank');
      }
    },
    [mobile, showOverlay, url, item, onOpenModal],
  );

  return (
    <div
      className={classNames(
        'absolute inset-0 h-full w-full transition-all duration-300 cursor-pointer',
        'bg-gradient-to-t from-black/90 via-black/50 to-transparent',
        {'opacity-0 hover:opacity-80': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      onClick={handleItemClick}
      ref={linkRef}
    >
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col justify-end gap-y-2">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
            <p className="text-sm text-neutral-200 leading-relaxed line-clamp-3">{description}</p>
            <div className="flex items-center gap-1 text-orange-400 text-sm font-medium">
              <span>{url && url.startsWith('http') ? 'Preview Project' : 'View Project'}</span>
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const ProjectModal: FC<{project: PortfolioItem; onClose: () => void}> = memo(({project, onClose}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useDetectOutsideClick(modalRef, onClose);

  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4 bg-white rounded-lg shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 bg-neutral-900 text-white">
          <div className="flex-1">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm text-neutral-300 mt-1">{project.description}</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded transition-colors"
            >
              <span>Open Site</span>
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="relative flex-1 h-full">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
              <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-neutral-600">Loading website preview...</p>
              </div>
            </div>
          )}
          <iframe
            src={project.url}
            className="w-full h-full border-0"
            style={{ height: 'calc(90vh - 80px)' }}
            onLoad={handleIframeLoad}
            title={`Preview of ${project.title}`}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation"
            referrerPolicy="no-referrer-when-downgrade"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
});