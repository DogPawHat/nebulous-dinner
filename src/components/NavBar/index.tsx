import React, { SFC } from 'react';
import { width } from 'styled-system';

import styled from '../../themeStyled';

import Step from './Step';

// Interface
interface INavBarProps {
  className?: string;
  currentStep: 'step_1' | 'step_2' | 'step_3';
}

type INavBar = SFC<INavBarProps>;

// Styled Components
const NavBarRoot = styled('div')`
  display: flex;
  flex-direction: row;
`;

// Main Components

const BaseNavBar: INavBar = ({ className, currentStep }) => (
  <NavBarRoot className={className}>
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
  </NavBarRoot>
);

// Style Main Component
const NavBar = styled(BaseNavBar)`
  ${width};
`;

export default NavBar;
