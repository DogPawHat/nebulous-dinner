import React, { SFC } from 'react';
import { width } from 'styled-system';

import styled, {activeColor, activeBorderColor} from '../../themeStyled';
import { css } from 'react-emotion';

// Interfaces
interface IStepProps {
  active: boolean;
  stepTracker: string;
  stepDescription: string;
  className?: string;
}

type IStep = SFC<IStepProps>;

// Styled Components
const clearSpace = css`
  padding: 0;
  margin: 0;
`;

const StepRoot = styled('div')`
  ${activeBorderColor} border-width: 0;
  border-style: none;
  border-bottom-style: solid;
  border-bottom-width: 4px;
  padding: 0 0 12px 44px;
`;

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
const Step: IStep = ({ active, stepTracker, stepDescription, className }) => (
  <StepRoot active={active} className={className}>
    <StepTracker active={active}>{stepTracker}</StepTracker>
    <StepDescription active={active}>{stepDescription}</StepDescription>
  </StepRoot>
);

export default styled(Step)`${width}`;
