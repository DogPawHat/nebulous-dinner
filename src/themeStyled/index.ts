import { css } from 'react-emotion';
import styled from './createThemedStyled';
import ITheme from './ITheme';
import theme from './theme';

export * from './selector'

const clearSpace = css`
  padding: 0;
  margin: 0;
`;

export {
    ITheme,
    theme,
    clearSpace
};

export default styled;
