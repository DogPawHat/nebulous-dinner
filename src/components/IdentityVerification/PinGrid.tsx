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
  }
`;

const PinGridRoot = styled('div')`
  display: grid;
  grid:
    [row1-start] "header header header header header header" 1fr [row1-end]
    [row2-start] "input-1 input-2 input-3 input-4 input-5 input-6" 1fr [row2-end]
    [row3-start] "footer-left footer-left footer-left footer-right footer-right footer-right" 24px [row3-end]
    / repeat(6, 1fr);
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
    <div className={headerClassName} />
    {
      keys.map(key => (
        <PinInputCell key={`input-${key}`}>
          <input className={pinInputClassName} />
        </PinInputCell>
      ))
    }
    <div className={footerLeftClassName} />
    <div className={footerRightClassName} />
  </PinGridRoot>
);

export default PinGrid;
