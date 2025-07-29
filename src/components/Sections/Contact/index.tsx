import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';
import {motion} from 'framer-motion';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import AnimatedSection from '../../Layout/AnimatedSection';
import Section from '../../Layout/Section';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact: FC = memo(() => {
  const {headerText, items} = contact;

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Contact}>
      <AnimatedSection>
        <div className="flex flex-col gap-y-8 items-center">
          <motion.div 
            className="flex flex-col gap-6 md:flex-row md:items-center text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <EnvelopeIcon className="h-20 w-20 text-orange-500 mx-auto md:mx-0" />
            </motion.div>
            <h2 className="text-4xl font-black text-white tracking-tight lg:text-5xl">{headerText}</h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 w-full max-w-2xl">
            <motion.div 
              className="col-span-full flex flex-col gap-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <dl className="flex flex-col space-y-6 text-base text-neutral-500">
                {items.map(({type, text, href}, index) => {
                  const {Icon, srLabel} = ContactValueMap[type];
                  return (
                    <motion.div 
                      key={srLabel}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <dt className="sr-only">{srLabel}</dt>
                      <dd className="flex items-center">
                        <motion.a
                          className={classNames(
                            'group flex items-center gap-4 rounded-xl p-4 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-neutral-700/50 hover:bg-neutral-700/70 transition-all duration-300 w-full',
                          {'hover:text-white': href},
                        )}
                        href={href}
                          target="_blank"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Icon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-base font-medium">{text}</span>
                        </motion.a>
                      </dd>
                    </motion.div>
                  );
                })}
              </dl>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
