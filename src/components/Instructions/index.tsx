import React, { SFC } from 'react';
import { } from 'react-emotion';

import styled from '../../themeStyled';

// Interfaces
interface IInstructionsProps {
  className?: string;
}

type IInstruction = SFC<IInstructionsProps>

// Styled Components
const InstructionsHeading = styled('h3')`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.text.black};
`;

const InstructionsDescription = styled('p')`
  font-weight: ${props => props.theme.fontWeights.book};
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.text.darkgrey};
`;


// Main Component
const Instructions: IInstruction = ({ className }) => (
  <div className={className}>
    <InstructionsHeading>Let's set up your transaction!</InstructionsHeading>
    <InstructionsDescription>
      Specify the amount to be sent or received
    </InstructionsDescription>
  </div>
);

export default Instructions
