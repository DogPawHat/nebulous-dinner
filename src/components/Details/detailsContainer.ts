import { css } from 'react-emotion';

export interface IConverterActiveChildProps {
  active: boolean;
}

export const detailsContainerClassName = 'DetailsContainer';

export const detailsContainerChildClassName = css`
  .${detailsContainerClassName} &:first-child {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  .${detailsContainerClassName} &:last-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .${detailsContainerClassName} &:not(:last-child) {
    border-bottom-style: none;
  }
`;
