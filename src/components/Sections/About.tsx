import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';
import {motion} from 'framer-motion';

import {aboutData, SectionId} from '../../data/data';
import AnimatedSection from '../Layout/AnimatedSection';
import GitHubStats from '../GitHubStats';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <AnimatedSection>
        <div className={classNames('grid grid-cols-1 gap-y-6', {'md:grid-cols-4': !!profileImageSrc})}>
          {!!profileImageSrc && (
            <motion.div 
              className="col-span-1 flex justify-center md:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative h-28 w-28 overflow-hidden rounded-2xl md:h-36 md:w-36 ring-4 ring-orange-500/20 hover:ring-orange-500/40 transition-all duration-300">
                <Image alt="about-me-image" className="h-full w-full object-cover hover:scale-110 transition-transform duration-300" src={profileImageSrc} />
              </div>
            </motion.div>
          )}
          <div className={classNames('col-span-1 flex flex-col gap-y-8', {'md:col-span-3': !!profileImageSrc})}>
            <div className="flex flex-col gap-y-4">
              <motion.h2 
                className="text-3xl font-black text-white tracking-tight lg:text-4xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                About me
              </motion.h2>
              <motion.p 
                className="prose prose-lg text-gray-300 sm:prose-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {description}
              </motion.p>
            </div>
            <motion.ul 
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {aboutItems.map(({label, text, Icon}, idx) => (
                <motion.li 
                  className="col-span-1 flex items-start gap-x-3 p-4 rounded-lg bg-neutral-700/50 hover:bg-neutral-700/70 transition-colors duration-300" 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  {Icon && <Icon className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />}
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-white">{label}</span>
                    <span className="text-sm text-gray-300 mt-1">{text}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          
          {/* GitHub Stats Section */}
          <motion.div 
            className="col-span-full mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <GitHubStats />
          </motion.div>
        </div>
      </AnimatedSection>
    </Section>
  );
});

About.displayName = 'About';
export default About;
