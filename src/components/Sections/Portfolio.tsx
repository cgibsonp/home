import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import AnimatedSection from '../Layout/AnimatedSection';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" sectionId={SectionId.Portfolio}>
      <AnimatedSection>
        <div className="flex flex-col gap-y-12">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-white mb-6 lg:text-5xl tracking-tight">Featured Projects</h2>
            <p className="text-neutral-300 max-w-3xl mx-auto text-xl leading-relaxed">
              A collection of projects showcasing my passion for technology and innovation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {portfolioItems.map((item, index) => {
              const {title, image} = item;
              return (
                <motion.div 
                  className="group" 
                  key={`${title}-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div
                    className={classNames(
                      'relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl shadow-black/40',
                      'transform transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20',
                      'bg-gradient-to-br from-neutral-700 to-neutral-800 ring-1 ring-white/10'
                    )}>
                    <Image
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      placeholder="blur"
                      src={image}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <ItemOverlay item={item} />
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/MondayNightGroup"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ring-2 ring-orange-500/20 hover:ring-orange-500/40"
            >
              <span>View Monday Night Group App</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
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
    <motion.a
      className={classNames(
        'absolute inset-0 h-full w-full transition-all duration-500',
        'bg-gradient-to-t from-black/95 via-black/60 to-transparent',
        {'opacity-0 hover:opacity-100': !mobile},
        showOverlay ? 'opacity-100' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target={url.startsWith('http') ? '_blank' : undefined}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-full w-full p-6">
        <div className="flex h-full w-full flex-col justify-end gap-y-3">
          <motion.div 
            className="space-y-3"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-black text-white leading-tight">{title}</h3>
            <p className="text-sm text-neutral-200 leading-relaxed line-clamp-3">{description}</p>
            {url && (
              <div className="flex items-center gap-2 text-orange-400 text-sm font-bold">
                <span>View Project</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                </div>
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
});
