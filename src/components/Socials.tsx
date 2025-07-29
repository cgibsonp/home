import {FC, memo} from 'react';
import {motion} from 'framer-motion';

import {socialLinks} from '../data/data';

const Socials: FC = memo(() => {
  return (
    <>
      {socialLinks.map(({label, Icon, href}, index) => (
        <motion.a
          aria-label={label}
          className="group -m-1.5 rounded-xl p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:-m-3 sm:p-3 hover:bg-white/10 hover:scale-110"
          href={href}
          key={label}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon className="h-6 w-6 align-baseline sm:h-7 sm:w-7 group-hover:drop-shadow-lg transition-all duration-300" />
        </motion.a>
      ))}
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;
