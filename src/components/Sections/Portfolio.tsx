import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
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
  return (
    <Section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4 lg:text-4xl">Featured Projects</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg">
            A collection of projects showcasing my passion for technology and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="group" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg shadow-black/30',
                    'transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/50',
                    'bg-gradient-to-br from-neutral-700 to-neutral-800'
                  )}>
                  <Image
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    placeholder="blur"
                    src={image}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <ItemOverlay item={item} />
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
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
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
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full transition-all duration-300',
        'bg-gradient-to-t from-black/90 via-black/50 to-transparent',
        {'opacity-0 hover:opacity-80': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target={url.startsWith('http') ? '_blank' : undefined}
    >
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col justify-end gap-y-2">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
            <p className="text-sm text-neutral-200 leading-relaxed line-clamp-3">{description}</p>
            {url && (
              <div className="flex items-center gap-1 text-orange-400 text-sm font-medium">
                <span>View Project</span>
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </div>
            )}
          </div>
        </div>
      </div>
    </a>
  );
});
