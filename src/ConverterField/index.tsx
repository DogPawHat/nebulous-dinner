import React from 'react';
import {
  borderColor,
  color
} from 'styled-system';
import styled from '../themeStyled';

import IConverterField from './IConverterField';

const ConverterFieldRoot = styled('div')`
  ${color}
  ${borderColor}
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  width: 564px;
  height: 98px;
  padding: 2px 24px;
`;

const ConverterDescription = styled('p')`
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.medium};
  text-transform: uppercase;
  line-height: 38px;
  ${color}
`;

const ConverterInput = styled('p')`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.text.black};
  border: none;
  background: transparent;
  line-height: 38px;
`;

const ConvertStrong = styled('strong')`
  font-size: ${props => props.theme.fontSizes.huge};
`;

const themeKeys = {
  active: {
    rootBg: "bg.blue",
    rootBorderColor: "border.blue",
    descriptionColor: "text.blue"
  },
  inactive: {
    rootBg: "bg.white",
    rootBorderColor: "border.grey",
    descriptionColor: "text.grey"
  }
};

const getActiveKeys = (active: boolean) => active ?
  themeKeys.active :
  themeKeys.inactive;

const ConverterField: IConverterField = ({ description, active }) => (
  <ConverterFieldRoot 
    bg={getActiveKeys(active).rootBg}
    borderColor={getActiveKeys(active).rootBorderColor}
  >
    <ConverterDescription 
      color={getActiveKeys(active).descriptionColor}
    >{description}</ConverterDescription>
    <ConverterInput>
      <ConvertStrong>€ 2,000</ConvertStrong>.00
    </ConverterInput>
  </ConverterFieldRoot>
);

export default ConverterField;
