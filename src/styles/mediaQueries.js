import { useMediaQuery } from 'react-responsive';

export default function() {
  return {
    isDesktopOrLaptop: useMediaQuery({
      query: '(min-device-width: 1224px)'
    }),
    isTabletOrMobile: useMediaQuery({
      query: '(max-width: 1224px)'
    }),
    isMobile: useMediaQuery({
      query: '(max-width: 767px)'
    }),
    Desktop: ({ children }) => {
      const isDesktop = useMediaQuery({ minWidth: 1224 });
      return isDesktop ? children : null;
    },
    Tablet: ({ children }) => {
      const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1224 });
      return isTablet ? children : null;
    },
    Mobile: ({ children }) => {
      const isMobile = useMediaQuery({ maxWidth: 767 });
      return isMobile ? children : null;
    },
    Default: ({ children }) => {
      const isNotMobile = useMediaQuery({ minWidth: 768 });
      return isNotMobile ? children : null;
    }
  };
}
