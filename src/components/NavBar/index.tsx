import React, { SFC } from 'react';
import { width } from 'styled-system';

import styled from '../../themeStyled';

import Step from './Step';

// Interface
interface INavBarProps {
  className?: string;
  currentStep: 'step_1' | 'step_2' | 'step_3';
  width: any;
}

type INavBar = SFC<INavBarProps>;

// Main Components

const BaseNavBar: INavBar = ({ className, currentStep }) => (
  <div className={className}>
    <Step
      active={currentStep === 'step_1'}
      width={1 / 3}
      stepTracker="Step 1"
      stepDescription="Transaction Info"
    />
    <Step
      active={currentStep === 'step_2'}
      width={1 / 3}
      stepTracker="Step 2"
      stepDescription="Recipient info"
    />
    <Step
      active={currentStep === 'step_3'}
      width={1 / 3}
      stepTracker="Step 3"
      stepDescription="Make payment"
    />
  </div>
);

// Style Main Component
const NavBar = styled(BaseNavBar)`
  display: flex;
  flex-direction: row;
  ${width};
`;

export default NavBar;
