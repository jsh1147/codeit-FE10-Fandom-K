export const scaleOut = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { ease: 'easeOut', duration: 0.75 },
};

export const bottomToTop = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  transition: { ease: 'easeOut', duration: 0.75 },
};

export const leftToRight = {
  initial: { opacity: 0, x: -48 },
  whileInView: { opacity: 1, x: 0 },
  transition: { ease: 'easeOut', duration: 0.75 },
};

export const RightToLeft = {
  initial: { opacity: 0, x: 48 },
  whileInView: { opacity: 1, x: 0 },
  transition: { ease: 'easeOut', duration: 0.75 },
};
