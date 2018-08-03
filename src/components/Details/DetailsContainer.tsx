import styled, { css } from 'react-emotion';

export interface IConverterActiveChildProps {
  active: boolean;
};

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
    border-top: none;
  }
`;

export const DetailsContainerChild = baseStyle;

const DetailsContainer = styled('div')`
  transform-style: preserve-3d;
`;

export default DetailsContainer;
