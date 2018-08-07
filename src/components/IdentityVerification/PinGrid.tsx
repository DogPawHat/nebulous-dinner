import React from 'react';
import styled from 'react-emotion';
import { colors } from '../../styleUtils';


interface IPinInputProps {
  key: string;
}

const keys = [1, 2, 3, 4, 5, 6];

const headerClassName = 'PinGrid__header';
const footerLeftClassName = 'PinGrid__footer-left';
const footerRightClassName = 'PinGrid__footer-light';

const pinInputClassName = 'PinGrid__pin-input';

const PinInputCell = styled('div')`
  grid-area: ${(props: IPinInputProps) => props.key};
  padding: 1rem;
  > input.${pinInputClassName} {
    border-radius: 0.25rem;
    border: 1px solid ${colors.lightgrey};
    background-color: ${colors.white};
    width: 100%;
  }
`;

const PinGridRoot = styled('div')`
  display: grid;
  grid: 1fr auto 1fr / repeat(6, 1fr);
  height: 100%;
  grid-template-areas: 
    "header header header header header header"
    "input-1 input-2 input-3 input-4 input-5 input-6"
    "footer-left footer-left footer-left footer-right footer-right footer-right";
  > .${headerClassName} {
    grid-area: header;
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
    <div className={headerClassName} >Header derp</div>
    {
      keys.map(key => (
        <PinInputCell key={`input-${key}`}>
          <input className={pinInputClassName} />
        </PinInputCell>
      ))
    }
    <div className={footerLeftClassName} >FooterDerp</div>
    <div className={footerRightClassName} >FooterHerpADerp</div>
  </PinGridRoot>
);

export default PinGrid;
