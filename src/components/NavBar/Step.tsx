import React, { SFC } from 'react';
import styled, { Interpolation, css } from 'react-emotion';
import color from 'color';
import { fontSizes, fontWeights, colors } from '../../styleUtils';

// Interfaces
interface IStepProps {
  active: boolean;
  stepTracker: string;
  stepDescription: string;
  className?: string;
}

interface IStepRootProps {
  active: boolean;
}

type IStep = SFC<IStepProps>;

// CSS Interpolations
const activeColor: Interpolation<IStepRootProps> = ({ active }) => css`
  color: ${active ? colors.blue : colors.grey};
`;

const activeBorderOpacity: Interpolation<IStepRootProps> = ({ active }) => css`
  border-bottom-color: ${active
    ? colors.blue
    : color(colors.blue)
        .alpha(0.2)
        .string()};
`;

// Styled Component Root
const stepTrackerClassName = 'Step__tracker';
const stepDescriptionClassName = 'Step__description';

const StepRoot = styled('div')`
  border-style: none;
  border-bottom-style: solid;
  border-bottom-width: 0.25rem;
  padding: 0 0 0.75rem 2.75rem;
  ${activeBorderOpacity}
  .${stepTrackerClassName}, .${stepDescriptionClassName} {
    ${activeColor}
    font-weight: ${fontWeights.medium}
  }
  .${stepTrackerClassName} {
    font-size: ${fontSizes.body}
  }
  .${stepDescriptionClassName} {
    font-size: ${fontSizes.small};
  }
`;

// Component
const Step: IStep = ({ active, stepTracker, stepDescription, className }) => (
  <StepRoot className={className} active={active}>
    <h6 className={stepTrackerClassName}>{stepTracker}</h6>
    <h5 className={stepTrackerClassName}>{stepDescription}</h5>
  </StepRoot>
);

export default Step;
