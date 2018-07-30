import React, { SFC } from 'react';
import styled, {
  activeColor,
  activeBg
} from '../../themeStyled';

// Interfaces
export interface IConverterFieldProps {
  description: string;
  active: boolean;
  className?: string;
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

// Component
const BaseField: IConverterField = ({ description, active, className }) => (
  <div className={className}>
    <ConverterDescription active={active}>{description}</ConverterDescription>
    <ConverterInput>
      <ConvertStrong>€ 2,000</ConvertStrong>.00
    </ConverterInput>
  </div>
);

const Field = styled(BaseField)`
  ${activeBg}
  width: 100%;
  height: 98px;
  padding: 2px 24px;
`;

export default Field;
