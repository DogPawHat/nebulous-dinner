import React, { SFC } from 'react';
import styled, { css, Interpolation } from 'react-emotion';
import facepaint from 'facepaint'
import { breakpoints } from '../../styleUtils';


// Interfaces
interface IModalProps {
  display: boolean;
  classname: string;
}

type IModal = SFC<IModalProps>;


// Breakpoints
const mq = facepaint([
  breakpoints.small,
  breakpoints.medium,
  breakpoints.large
])


// CSS Classes
export const modalMain = 'Modal__main';

const displayModal: Interpolation<IModalProps> = ({ display }) => css`
  display: ${display ? 'block' : 'none'};
`;

const mqVariables = mq({
  left: [0,'50%', '50%'],
  top: ['25%', '50%', '50%'],
  width: ['100%', undefined, undefined],
  transform: [
    undefined,
    'translate(-50%,-50%)',
    'translate(-50%,-50%)'
  ]
});

// Styled Root Component
const ModalRoot = styled('div')`
  ${displayModal}
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  > .${modalMain} {
    ${mqVariables}
    z-index: 15;
    position:fixed;
  }
`;

// Main Component
const Modal: IModal = ({children, ...otherProps}) => (
  <ModalRoot {...otherProps}>
    {children}
  </ModalRoot>
);

export default Modal;
