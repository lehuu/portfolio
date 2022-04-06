export const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  mobileXL: 640,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
} as const;

const breakpoints = {
  mobileS: `(min-width: ${size.mobileS}px)`,
  mobileM: `(min-width: ${size.mobileM}px)`,
  mobileL: `(min-width: ${size.mobileL}px)`,
  mobileXL: `(min-width: ${size.mobileXL}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  desktopL: `(min-width: ${size.desktop}px)`,
};

export default breakpoints;
