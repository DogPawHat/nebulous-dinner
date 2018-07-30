import { css, Themed, Interpolation } from 'react-emotion';
import { ITheme } from '.';

// Interfaces
interface IActiveProps {
  active: boolean;
}

type IThemeSelector = Interpolation<Themed<IActiveProps, ITheme>>;

// Selector
const activeColor: IThemeSelector = ({ active, theme }) =>
  css`
    color: ${active ? theme.colors.text.blue : theme.colors.text.grey};
  `;

const activeBg: IThemeSelector = ({ active, theme }) =>
  css`
    background-color: ${active ? theme.colors.bg.blue : theme.colors.bg.white};
  `;

const activeBorderColor: IThemeSelector = ({ active, theme }) =>
  css`
    border-color: ${active ? theme.colors.border.blue : theme.colors.border.grey};
  `;

export { activeColor, activeBg, activeBorderColor };
