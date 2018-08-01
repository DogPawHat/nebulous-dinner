import React, { SFC, HTMLAttributes } from 'react';
import styled, { css } from 'react-emotion';
import { fontSizes, fontWeights, colors } from 'src/styleUtils';
import color from 'color';
import InputMasker, { IInputMaskerRenderProp } from './InputMasker';
import Input from './Input';

// Interfaces
export interface IConverterFieldProps extends HTMLAttributes<HTMLDivElement> {
  description: string;
  active: boolean;
  position?: 'top' | 'bottom';
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

const activeTransform = ({ active }: IConverterFieldRootProps) => css`
  color: ${active ? colors.blue : colors.grey};
`;

const activeBorderColor = ({ active }: IConverterFieldRootProps) => css`
  transform: ${active ? 'translateZ(5px)' : 'translateZ(0)'};
`;

const descriptionClassName = 'Converter__description';

// Styled Components
const FieldRoot = styled('div')`
  ${activeBg} ${activeBorderColor} ${activeTransform}
  padding: 0 24px;
  border-width: 1px;
  border-style: solid;
  .${descriptionClassName} { 
    line-height: 2.375rem;
    font-weight: ${fontWeights.medium};
    ${activeColor}
    font-size: ${fontSizes.body};
    text-transform: uppercase;
    line-height: 38px;
  }
`;


const maskerRenderProp: IInputMaskerRenderProp = (value, onChange) => (
  <Input value={value} onChange={onChange} />
)

// Main
const Field: IConverterField = ({ description, ...otherProps }) => (
  <FieldRoot {...otherProps}>
    <p className={descriptionClassName}>{description}</p>
    <InputMasker defaultValue={2000} render={maskerRenderProp} />
  </FieldRoot>
);

export default Field;
