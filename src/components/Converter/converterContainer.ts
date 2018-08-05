// The converter file has some tricky CSS
// Esssentally to get the layout right, this is what I had to do:


import { css } from 'react-emotion';

export interface IConverterActiveChildProps {
  active: boolean;
}

export const converterContainerClassName = 'ConverterContainer';

// Create a style for the active (blue higlighted) field, ensuring it
// has a border on 4 sides (actual colours are applied in the Field.tsx file)
// Also ensure the next field has no top border (prevents double border)
const activeStyle = css`
  .${converterContainerClassName} & {
    z-index: 5;
  }

  .${converterContainerClassName} &:first-child + * {
    border-top-style: none;
  }
`;

// Create styleds for the other, no active field (or fields)
// The way this works is:
// 1. have the last child have a border on all four sides
// 2. Have the rest only have a border on the top, left and right
// This gives the collection of fields a table like border-collape appeance
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
