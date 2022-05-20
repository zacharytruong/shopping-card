import { createTheme } from '@nextui-org/react';

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primaryLight: '#FFE2BA',
      primaryLightHover: '#FFCE98',
      primaryLightActive: '#FFBB7E',
      primaryLightContrast: '#DB753D',
      primary: '#ff9b54',
      primaryBorder: '#FF9B54',
      primaryBorderHover: '#DB753D',
      primarySolidHover: '#B7542A',
      primarySolidContrast: '$white',
      primaryShadow: '#FF9B54',
      secondaryLight: '#E6FCB3',
      secondaryLightHover: '#D1F78C',
      secondaryLightActive: '#BCEF6E',
      secondaryLightContrast: '#7CC42E',
      secondary: '#9DE540',
      secondaryBorder: '#9DE540',
      secondaryBorderHover: '#7CC42E',
      secondarySolidHover: '#5FA420',
      secondarySolidContrast: '$white',
      secondaryShadow: '#9DE540',
      success: '#9DE540',
      info: '#25CDFC',
      warning: '#FFB13D',
      error: '#FF72A6',
      gradient: 'linear-gradient(165deg, #ff9b54, #f4ad3d, #c7d22a, #9de540)',
      link: '#326D0C'
    }
  }
});

export default darkTheme;
