import React, {SFC} from 'react';
import { cx, css } from 'react-emotion';

import DetailsContainer, { DetailsContainerChild } from './DetailsContainer';
import { colors, fontWeights, fontSizes } from '../../styleUtils';

interface IConverterProps {
  className?: string
}

type IConverter = SFC<IConverterProps>;


const mainFont = css`
  color: ${colors.lightblack};
  font-weight: ${fontWeights.medium};
  font-size: ${fontSizes.body};
`;

const subFont = css`
  color: ${colors.grey};
  font-weight: ${fontWeights.book};
  font-size: ${fontSizes.body};
  background-color: white;
`;


const mainStyle = css`
  border: 1px solid #e0e0e0;
  padding: 0.9rem 0 0.9rem 1.15rem;
  line-height: 1.5rem;
`;

const Details: IConverter = ({className}) => (
  <DetailsContainer className={className}>
    <p className={cx(DetailsContainerChild, mainStyle, mainFont)}>Sending Details</p>
    <p className={cx(DetailsContainerChild, mainStyle, subFont)}>derp</p>
    <p className={cx(DetailsContainerChild, mainStyle, mainFont)}>derp</p>
    <div className={cx(DetailsContainerChild, mainStyle, subFont)}>
      <p>derp</p>
      <p>derp</p>
      <p>derp</p>
      <p>derp</p>
    </div>
    <div className={cx(DetailsContainerChild, mainStyle, subFont)}>
      <p>derp</p>
    </div>
  </DetailsContainer>
);

export default Details;
