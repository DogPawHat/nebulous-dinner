import { css } from 'react-emotion';

export interface IConverterActiveChildProps {
  active: boolean;
}

export const converterContainerClassName = 'ConverterContainer';

const activeStyle = css`
  .${converterContainerClassName} & {
    z-index: 5;
  }

  .${converterContainerClassName} &:first-child + * {
    border-top-style: none;
  }
`;

const nonActiveStyle = css`
  .${converterContainerClassName} &:not(:last-child) {
    border-bottom-style: none;
  }
`;

const baseStyle = css`
  .${converterContainerClassName} &:first-child {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  .${converterContainerClassName} &:last-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

export const converterContainerChildClassName =
  ({ active }: IConverterActiveChildProps) => css`
    ${baseStyle}
    ${active ? activeStyle : nonActiveStyle}
  `;
