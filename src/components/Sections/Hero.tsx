import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        {/* Particle Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
        
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <motion.div 
            className="flex flex-col items-center gap-y-8 rounded-xl bg-gray-800/40 p-8 text-center shadow-2xl backdrop-blur-sm border border-white/10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl font-black text-white sm:text-6xl lg:text-8xl tracking-tight"
              variants={nameVariants}
            >
              {name}
            </motion.h1>
            <motion.div variants={itemVariants}>
              {description}
            </motion.div>
            <motion.div className="flex gap-x-6 text-neutral-100" variants={itemVariants}>
              <Socials />
            </motion.div>
            <motion.div className="flex w-full justify-center gap-x-6" variants={itemVariants}>
              {actions.map(({href, text, primary, Icon}) => (
                <motion.a
                  className={classNames(
                    'group flex gap-x-2 rounded-full border-2 bg-none px-6 py-3 text-sm font-semibold text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6 group-hover:rotate-12 transition-transform duration-300" />}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          className="absolute inset-x-0 bottom-6 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2 hover:bg-orange-500 transition-colors duration-300"
            href={`/#${SectionId.About}`}>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
