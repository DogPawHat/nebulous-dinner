import React from 'react';
import styled, { css } from 'react-emotion';
import { colors, fontWeights, fontSizes } from '../../styleUtils';

interface IPinInputProps {
  key: string;
}

const keys = [1, 2, 3, 4, 5, 6];

const headerClassName = 'PinGrid__header';
const footerLeftClassName = 'PinGrid__footer-left';
const footerRightClassName = 'PinGrid__footer-light';

const smsCommon = css`
  padding: 0 0.3rem;
  font-size: ${fontSizes.medium};
  font-weight: ${fontWeights.medium};
  color: ${colors.grey};
  border: 1px solid #dedddd;
`;

const SMSAreaCode = styled('div')`
  ${smsCommon}
  border-bottom-left-radius: 0.125rem;
  border-top-left-radius: 0.125rem;
  border-right-style: none;
  background-color: #f1f1f1;
  width: 3rem;
  height: 2rem;
  line-height: 1.688rem;
  width: 3.3rem;
`;

const SMSNumberInput = styled('input')`
  ${smsCommon}
  color: ${colors.grey};
  border-bottom-right-radius: 0.125rem;
  border-top-right-radius: 0.125rem;
  background-color: #f5f5f5;
  width: 3rem;
  height: 2rem;
  line-height: 1.688rem;
  width: 6.7rem;
`;

const PinInputCell = styled('input')`
  grid-area: ${(props: IPinInputProps) => props.key};
  border-radius: 0.25rem;
  border: 1px solid ${colors.lightgrey};
  background-color: ${colors.white};
`;

const FooterLink = styled('p')`
  color: ${colors.lightblack};
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.book};
`;

const PinGridRoot = styled('div')`
  display: grid;
  grid: 2.55rem 3.375rem 1fr / repeat(6, 3.375rem);
  gap: 0.875rem;
  height: 100%;
  grid-template-areas:
    'header header header header header header'
    'input-1 input-2 input-3 input-4 input-5 input-6'
    'footer-left footer-left footer-left footer-right footer-right footer-right';
  > .${headerClassName} {
    grid-area: header;
    display: flex;
    align-content: baseline;
    line-height: 1.688rem;
    font-size: ${fontSizes.medium};
    font-weight: ${fontWeights.medium};
    > p {
      padding: 0 0.4rem;
    }
  }
  > .${footerLeftClassName} {
    grid-area: footer-left;
  }
  > .${footerRightClassName} {
    grid-area: footer-right;
    text-align: right;
  }
`;

const PinGrid = () => (
  <PinGridRoot>
    <div className={headerClassName}>
      <p>Enter the code sent via SMS to</p>
      <SMSAreaCode>+353</SMSAreaCode>
      <SMSNumberInput maxLength={9}/>
    </div>
    {keys.map(key => (
      <PinInputCell key={`input-${key}`} />
    ))}
    <div className={footerLeftClassName}>
      <FooterLink>Receive a new code</FooterLink>
    </div>
    <div className={footerRightClassName}>
      <FooterLink>Receive code via call instead</FooterLink>
    </div>
  </PinGridRoot>
);

export default PinGrid;
