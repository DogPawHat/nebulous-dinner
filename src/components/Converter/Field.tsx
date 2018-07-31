import React, { SFC, HTMLAttributes } from 'react';

import styled, {
  activeColor, activeBg, activeBorderColor
} from '../../themeStyled';

// Interfaces
export interface IConverterFieldProps extends HTMLAttributes<HTMLDivElement> {
  description: string;
  active: boolean;
  position?: 'top' | 'bottom';
}

type IConverterField = SFC<IConverterFieldProps>;


// Styled Components
const ConverterDescription = styled('p')`
  ${activeColor}
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.medium};
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  line-height: 38px;
`;

const ConverterInput = styled('p')`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.text.black};
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  line-height: 38px;
`;

const ConvertStrong = styled('strong')`
  font-size: ${props => props.theme.fontSizes.huge};
`;

// Base Component
const BaseField: IConverterField = ({ description, active, ...otherProps }) => (
  <div {...otherProps}>
    <ConverterDescription active={active}>{description}</ConverterDescription>
    <ConverterInput>
      <ConvertStrong>€ 2,000</ConvertStrong>.00
    </ConverterInput>
  </div>
);

// Style Base Component
const Field = styled(BaseField)`
  ${activeBg}
  ${activeBorderColor}
  padding: 0 24px;
  border-width: 1px;
  border-style: solid;
  transform: ${props => props.active ? 'translateZ(5px)' : 'translateZ(0)'};
`;


export default Field;
