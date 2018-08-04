import React, {SFC} from 'react';
import { cx, css } from 'react-emotion';

import Field, { FieldLine } from './Field';
import {detailsContainerClassName, detailsContainerChildClassName } from './detailsContainer';
import { colors, fontWeights, fontSizes } from '../../styleUtils';

interface IConverterProps {
  className?: string
}

type IConverter = SFC<IConverterProps>;


const mainFont = css`
  color: ${colors.lightblack};
  font-weight: ${fontWeights.medium};
  font-size: ${fontSizes.body};
`;

const subFont = css`
  color: ${colors.grey};
  font-weight: ${fontWeights.book};
  font-size: ${fontSizes.body};
`;


const mainStyle = css`
  border: 1px solid #e0e0e0;
  padding: 0.9rem 1.15rem;
  line-height: 1.5rem;
`;

const subStyle = css`
  ${mainStyle}
  background-color: white;
`;

const detailsFooter = css`
  color: #ffc766;
  font-weight: ${fontWeights.medium};
  font-size: ${fontSizes.small};
  text-align: center;
  > strong {
    font-weight: 700;
  }
`;

const infoLine = css`
  color: #64b5f6;
  font-weight: ${fontWeights.book};
  font-size: ${fontSizes.small};
`;

const mainChildField = cx(detailsContainerChildClassName, mainStyle);
const secondaryChildField = cx(detailsContainerChildClassName, subStyle)

const Details: IConverter = ({className}) => (
  <div className={cx(className, detailsContainerClassName)}>
    <Field className={mainChildField}>
      <FieldLine>
        <p className={mainFont}>Sending Details</p>
      </FieldLine>
    </Field>
    <Field className={secondaryChildField}>
      <FieldLine>
        <p className={subFont}>You send</p>
        <p className={mainFont}>€2000.00</p>
      </FieldLine>
    </Field>
    <Field className={mainChildField}>
      <FieldLine>
        <p className={mainFont}>Receiving Details</p>
        <p className={infoLine}>As of right now</p>
      </FieldLine>
    </Field>
    <Field className={secondaryChildField}>
      <FieldLine>
        <p className={subFont}>Rate</p>
        <p className={subFont}>0.86022</p>
      </FieldLine>
      <FieldLine>
        <p className={subFont}>Fee</p>
        <p className={subFont}>£2.50</p>
      </FieldLine>
      <FieldLine>
        <p className={subFont}>Delivery date</p>
        <p className={subFont}>25th November</p>
      </FieldLine>
      <FieldLine>
        <p className={subFont}>Recipient gets</p>
        <p className={mainFont}>£1717.94</p>
      </FieldLine>
    </Field>
    <div className={cx(
        mainChildField,
        detailsFooter
      )}
    >
      You save <strong>£66.19</strong> compared to your bank!
    </div>
  </div>
);

export default Details;
