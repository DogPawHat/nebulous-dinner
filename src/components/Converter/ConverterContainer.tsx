import styled, { css } from 'react-emotion';

export interface IConverterActiveChildProps {
  active: boolean;
}

const activeStyle = css`
  transform: translateZ(5px);
  :not(:first-child) {
    transform: translateY(-1px) transformZ(5px);
  }
`;

const baseStyle = css`
  :first-child {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  :last-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  :not(:first-child) {
    transform: translateY(-1px);
  }
`;

export const ConverterContainerChild =
  ({ active }: IConverterActiveChildProps) => css`
    ${baseStyle}
    ${active ? activeStyle : undefined}
  `;

const ConverterContainer = styled('div')`
  transform-style: preserve-3d;
`;

export default ConverterContainer;
