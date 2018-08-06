import React, { SFC } from 'react';
import styled, { css, Interpolation } from 'react-emotion';


// Interfaces
interface IModalProps {
  display: boolean;
}

type IModal = SFC<IModalProps>;

// CSS Classes
const modalMain = 'Modal__main';

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
    background: white;
    border-radius: 0.25rem;
    width: 80%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
`;

// Main Component
const Modal: IModal = ({display, children}) => (
  <ModalRoot display={display}>
    <div className={modalMain} >
      {children}
    </div>
  </ModalRoot>
);

export default Modal;
