import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {FC, memo, PropsWithChildren} from 'react';

interface AnimatedSectionProps {
  className?: string;
  delay?: number;
  duration?: number;
}

const AnimatedSection: FC<PropsWithChildren<AnimatedSectionProps>> = memo(({
  children,
  className = '',
  delay = 0,
  duration = 0.8
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
});

AnimatedSection.displayName = 'AnimatedSection';
export default AnimatedSection;