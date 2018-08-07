import React from 'react';
import styled from 'react-emotion';
import { colors, fontWeights, fontSizes } from '../../styleUtils';


interface IPinInputProps {
  key: string;
}

const keys = [1, 2, 3, 4, 5, 6];

const headerClassName = 'PinGrid__header';
const footerLeftClassName = 'PinGrid__footer-left';
const footerRightClassName = 'PinGrid__footer-light';

const PinInputCell = styled('input')`
  grid-area: ${(props: IPinInputProps) => props.key};
  border-radius: 0.25rem;
  border: 1px solid ${colors.lightgrey};
  background-color: ${colors.white};
  width: 100%;
`;

const FooterLink = styled('p')`
  color: ${colors.lightblack};
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.book};
`;

const PinGridRoot = styled('div')`
  display: grid;
  grid: 2.55rem 3.375rem 1fr / repeat(6, 3.375rem);
  column-gap: 0.875rem;
  height: 100%;
  grid-template-areas: 
    "header header header header header header"
    "input-1 input-2 input-3 input-4 input-5 input-6"
    "footer-left footer-left footer-left footer-right footer-right footer-right";
  > .${headerClassName} {
    grid-area: header;
    line-height: 1.688rem;
    font-size: ${fontSizes.medium};
    font-weight: ${fontWeights.medium};
  }
  > .${footerLeftClassName} {
    grid-area: footer-left;
  }
  > .${footerRightClassName} {
    grid-area: footer-right;
  }
`;



const PinGrid = () => (
  <PinGridRoot>
    <div className={headerClassName} >Enter the code sent via SMS to</div>
    {
      keys.map(key => (
        <PinInputCell key={`input-${key}`} />
      ))
    }
    <div className={footerLeftClassName} >
      <FooterLink>Receive a new code</FooterLink>
    </div>
    <div className={footerRightClassName} >
      <FooterLink>Receive code via call instead</FooterLink>
    </div>
  </PinGridRoot>
);

export default PinGrid;
