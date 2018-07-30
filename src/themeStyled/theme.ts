import ITheme from './ITheme';

const theme: ITheme = {
  fontWeights: {
    bold: 'bold',
    book: 'normal',
    medium: 500
  },
  fontSizes: {
    small: `12px`,
    body: `14px`,
    medium: `16px`,
    large: `18px`,
    huge: `28px`
  },
  colors: {
    bg: {
      blue: `rgba(110, 192, 230, 0.03)`,
      white: `#ffffff`,
      black: `#32323c`
    },
    border: {
      blue: `#6ec0e6`,
      grey: `#e6e6e6`
    },
    text: {
      black: `#616161`,
      blue: `#6ec0e6`,
      darkgrey: `#757575`,
      grey: `#9e9e9e`
    }
  }
};

export default theme;
