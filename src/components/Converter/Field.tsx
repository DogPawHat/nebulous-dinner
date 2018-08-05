import React, { SFC, HTMLAttributes } from 'react';
import styled, { css } from 'react-emotion';
import { fontSizes, fontWeights, colors } from '../../styleUtils';
import color from 'color';
import MaskedInput from 'react-text-mask';
import { createNumberMask } from 'text-mask-addons/dist/textMaskAddons';

// Interfaces
export interface IConverterFieldProps extends HTMLAttributes<HTMLDivElement> {
  description: string;
  active: boolean;
  currency: 'EUR' | 'GBP';
  position?: 'top' | 'bottom';
  className?: string;
}

interface IConverterFieldRootProps {
  active: boolean;
}

type IConverterField = SFC<IConverterFieldProps>;

// CSS classes
const activeBg = ({ active }: IConverterFieldRootProps) => css`
  background-color: ${active
    ? color(colors.blue)
        .alpha(0.3)
        .string()
    : colors.white};
`;

const activeColor = ({ active }: IConverterFieldRootProps) => css`
  color: ${active ? colors.blue : colors.grey};
`;

const activeBorderColor = ({ active }: IConverterFieldRootProps) => css`
  color: ${active ? colors.blue : colors.grey};
`;

const descriptionClassName = 'Converter__description';
const inputClassName = 'Converter__input';

// Styled Components
const FieldRoot = styled('div')`
  ${activeBg} ${activeBorderColor}
  padding: 0.125rem 1.5rem 0.375rem;
  border-width: 0.063rem;
  border-style: solid;
  .${descriptionClassName}, .${inputClassName} {
    line-height: 2.375rem;
    font-weight: ${fontWeights.medium};
  }
  .${descriptionClassName} {
    ${activeColor}
    font-size: ${fontSizes.body};
    text-transform: uppercase;
  }
  .${inputClassName} {
    font-size: ${fontSizes.huge};
    color: ${colors.black};
    background: transparent;
    border: none;
  }
`;

const prefixes = {
  'EUR': '€ ',
  'GBP': '£ '
};

const myMask = (currency: 'EUR'| 'GBP') => (rawValue: string) => {
  const numberMask = createNumberMask({
      prefix: prefixes[currency],
      includeThousandsSeparator: true,
      allowDecimal: true,
      requireDecimal: true,
      allowLeadingZeroes: false
  });
  const resultMask = numberMask(rawValue);

  const decimalsRegex = /\.([0-9]{1,2})/;
  const result = decimalsRegex.exec(rawValue);
  // In case there is only one decimal
  if (result && result[1].length < 2) {
      resultMask.push('0');
  } else if (!result) {
      resultMask.push('0');
      resultMask.push('0');
  }

  return resultMask;
};

// Main
const Field: IConverterField = ({ description, currency, ...otherProps }) => (
  <FieldRoot {...otherProps}>
    <p className={descriptionClassName}>{description}</p>
    <MaskedInput
      value="$2000.00"
      mask={myMask(currency)}
      placeholder="$2000.00"
      className={inputClassName}
    />
  </FieldRoot>
);

export default Field;
