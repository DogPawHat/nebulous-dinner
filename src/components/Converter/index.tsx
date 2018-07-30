import { width } from 'styled-system';

import Field from './Field';

import styled, {
  activeBorderColor
} from '../../themeStyled';
import { ComponentClass } from 'react';

interface IConverterProps {
  active: boolean;
  width?: any;
}

type IConverter = ComponentClass<IConverterProps>

const Converter: IConverter = styled('div')`
  ${width}
  ${activeBorderColor}
  border-width: 1px;
  border-radius: 4px;
  border-style: solid;
`;

export {
  Field
}

export default Converter;
