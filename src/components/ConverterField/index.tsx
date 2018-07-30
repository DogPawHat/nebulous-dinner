import React from 'react';
import {
  width
} from 'styled-system';
import styled, { activeColor, activeBorderColor, activeBg } from '../../themeStyled';

import IConverterField from './IConverterField';

// Styled Components
const ConverterFieldRoot = styled('div')`
  ${activeBg}
  ${activeBorderColor}
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  height: 98px;
  padding: 2px 24px;
`;

const ConverterDescription = styled('p')`
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.medium};
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  line-height: 38px;
  ${activeColor}
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

// Component
const ConverterField: IConverterField = ({ description, active, className }) => (
  <ConverterFieldRoot 
    active={active}
    className={className}
  >
    <ConverterDescription 
      active={active}
    >{description}</ConverterDescription>
    <ConverterInput>
      <ConvertStrong>€ 2,000</ConvertStrong>.00
    </ConverterInput>
  </ConverterFieldRoot>
);



export default styled(ConverterField)`${width}`;
