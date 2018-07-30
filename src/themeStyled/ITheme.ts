interface ITheme {
  colors: {
    text: {
      blue: string;
      grey: string;
      black: string;
    };
    bg: {
      blue: string;
      white: string;
    };
    border: {
      blue: string;
      grey: string;
    };
  };
  fontWeights: {
      bold: string | number;
      book: string | number;
      medium: string | number;
  },
  fontSizes: {
      small: string | number;
      body: string | number;
      medium: string | number;
      large: string | number;
      huge: string | number;
  }
}

export default ITheme;
