import React, { SFC } from 'react';
import { width } from 'styled-system';

import styled, {activeColor, activeBorderColor, clearSpace} from '../../themeStyled';

// Interfaces
interface IStepProps {
  width?: any;
  active: boolean;
  stepTracker: string;
  stepDescription: string;
  className?: string;
}

type IStep = SFC<IStepProps>;

// Styled Components
const StepTracker = styled('h6')`
  ${activeColor}
  ${clearSpace}
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

const StepDescription = styled('h5')`
  ${activeColor}
  ${clearSpace}
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

// Component
const BaseStep: IStep = ({ active, stepTracker, stepDescription, className }) => (
  <div className={className}>
    <StepTracker active={active}>{stepTracker}</StepTracker>
    <StepDescription active={active}>{stepDescription}</StepDescription>
  </div>
);

const Step = styled(BaseStep)`
  ${width}
  ${activeBorderColor} border-width: 0;
  border-style: none;
  border-bottom-style: solid;
  border-bottom-width: 4px;
  padding: 0 0 12px 44px;
`;

export default Step;
