import React, { SFC, HTMLAttributes } from 'react';

import styled from 'react-emotion';

import Step from './Step';

// Interface
interface INavBarProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
  currentStep: 'step_1' | 'step_2' | 'step_3';
}

type INavBar = SFC<INavBarProps>;



// CSS classes
const stepWidth = 'navBar__Step--width';

const NavBarRoot = styled('div')`
  display: flex;
  flex-direction: row;
  .${stepWidth} {
    width: ${100/3}%;
  }
`;

// Main Components
const NavBar: INavBar = ({ className, currentStep }) => (
  <NavBarRoot className={className}>
    <Step
      active={currentStep === 'step_1'}
      className={stepWidth}
      stepTracker="Step 1"
      stepDescription="Transaction Info"
    />
    <Step
      active={currentStep === 'step_2'}
      className={stepWidth}
      stepTracker="Step 2"
      stepDescription="Recipient info"
    />
    <Step
      active={currentStep === 'step_3'}
      className={stepWidth}
      stepTracker="Step 3"
      stepDescription="Make payment"
    />
  </NavBarRoot>
);

export default NavBar;
