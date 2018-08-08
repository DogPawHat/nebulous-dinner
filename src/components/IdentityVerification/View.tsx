import React, { SFC, ReactEventHandler } from 'react';
import styled, {css} from 'react-emotion';
import { colors, fontSizes, fontWeights } from '../../styleUtils';

import Button from '../Button';
import Anchor from '../Anchor';

import PinGrid from './PinGrid';

interface IIdentiyVerification {
  className?: string;
  modalDeactivate?: () => void;
}

const headerClassName = 'IdentityVerification__header';
const middleClassname = 'IdentityVerification__middle';
const footerClassName = 'IdentityVerification__footer';

const footerLeftClassName = 'IdentityVerification__footer-left';

const topMiddlePadding = css`
  padding: 1.75rem;
`;

const middleBgColor = css`
  background-color: #fafafa;
`;

const whiteBgColor = css`
  background-color: ${colors.white};
`;

const borderCommon = css`
  border-width: 0.065rem;
  border-color: ${colors.lightgrey};
  border-top-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-bottom-style: none;
  &:last-child {
    border-bottom-style: solid;
  }
`;

const IdentityVerificationRoot = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  width: 36.25rem;
  z-index: 50;
  > .${headerClassName} {
    ${topMiddlePadding}
    ${borderCommon}
    ${whiteBgColor}
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
    height: 7.15rem;
    display: flex;
    flex-flow: column nowrap;
    > h4 {
      font-size: ${fontSizes.large};
      font-weight: ${fontWeights.medium};
      color: #768895;
    }
    > p {
      font-size: ${fontSizes.small};
      font-weight: ${fontWeights.book};
      color: #768895;
    }
  }
  > .${middleClassname} {
    ${borderCommon}
    ${middleBgColor}
    padding: 3.375rem 5.75rem;
    height: 16.5rem;
  }
  > .${footerClassName} {
    ${topMiddlePadding}
    ${borderCommon}
    ${whiteBgColor}
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
    height: 5.65rem;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    > .${footerLeftClassName} {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      width: 11rem;
    }
  }
`;

const backButtonHandler:
  (func?: () => void) => ReactEventHandler<HTMLButtonElement> =
  (func) => () =>  {
    if(func) {
      func();
    };
  };

const View: SFC<IIdentiyVerification> = ({className, modalDeactivate}) => (
  <IdentityVerificationRoot className={className}>
    <div className={headerClassName}>
      <h4>Identity verification required</h4>
      <p>For your security, we ocassionally require you to verify your identity by entering a code sent to your mobile device.</p>
    </div>
    <div className={middleClassname}>
      <PinGrid />
    </div>
    <div className={footerClassName}>
      <div className={footerLeftClassName}>
        <Button size='small' state='disabled-main'>Verify Identity</Button>
        <Button onClick={backButtonHandler(modalDeactivate)} size='small' state='secondary'>Back</Button>
      </div>
      <Anchor>I can't access this mobile device</Anchor>
    </div>
  </IdentityVerificationRoot>
)

export default View;
