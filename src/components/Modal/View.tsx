import React, { SFC } from 'react';
import styled, { css, Interpolation } from 'react-emotion';


// Interfaces
interface IModalProps {
  display: boolean;
  classname: string;
}

type IModal = SFC<IModalProps>;

// CSS Classes
export const modalMain = 'Modal__main';

const displayModal: Interpolation<IModalProps> = ({ display }) => css`
  display: ${display ? 'block' : 'none'};
`;

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
    z-index: 15;
    position:fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
`;

// Main Component
const Modal: IModal = ({children, ...otherProps}) => (
  <ModalRoot {...otherProps}>
    {children}
  </ModalRoot>
);

export default Modal;
