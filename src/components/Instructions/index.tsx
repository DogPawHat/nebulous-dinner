import React, { SFC } from 'react';

import styled from 'react-emotion';
import { colors, fontWeights, fontSizes } from '../../styleUtils';

// Interfaces
interface IInstructionsProps {
  className?: string;
}

type IInstruction = SFC<IInstructionsProps>

// Styled Components
const instructionsHeadingClassName = 'Instructions__heading';
const instructionsDescriptionClassName = 'Instructions__description';

const RootInstructions = styled('div')`
  .${instructionsHeadingClassName} {
    font-weight: ${fontWeights.medium};
    font-size: ${fontSizes.large};
    color: ${colors.lightblack};
  }
  .${instructionsDescriptionClassName} {
    font-weight: ${fontWeights.book};
    font-size: ${fontSizes.body};
    color: ${colors.darkgrey};
  }
`;

// Main Component
const Instructions: IInstruction = ({ className }) => (
  <RootInstructions className={className}>
    <h3 className={instructionsHeadingClassName}>
      Let's set up your transaction!
    </h3>
    <p className={instructionsDescriptionClassName}>
      Specify the amount to be sent or received
    </p>
  </RootInstructions>
);

export default Instructions
