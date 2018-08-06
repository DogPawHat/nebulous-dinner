import React, { SFC } from 'react';
import styled, {css} from 'react-emotion';
import { colors } from '../../styleUtils';

interface IIdentiyVerification {
  className?: string;
}

const headerClassName = 'IdentityVerification__header';
const middleClassname = 'IdentityVerification__middle';
const footerClassName = 'IdentityVerification__footer';

const middleBgColor = css`
  background-color: #fafafa;
`;

const whiteBgColor = css`
  background-color: ${colors.white};
`;

const borderCommon = css`
  border-width: 1px;
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
    ${borderCommon}
    ${whiteBgColor}
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
    height: 7.15rem;
  }
  > .${middleClassname} {
    ${borderCommon}
    ${middleBgColor}
    height: 16.5rem;
  }
  > .${footerClassName} {
    ${borderCommon}
    ${whiteBgColor}
    height: 5.65rem;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
`;

const View: SFC<IIdentiyVerification> = ({className}) => (
  <IdentityVerificationRoot className={className}>
    <div className={headerClassName}>HerpADerp</div>
    <div className={middleClassname}>Derp</div>
    <div className={footerClassName}>Derp</div>
  </IdentityVerificationRoot>
)

export default View;
