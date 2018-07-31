import React, { SFC, Attributes } from 'react';
import { width } from 'styled-system';

import Field from './Field';
import ActiveFieldTracker, {IActiveFieldTrackerRenderProp} from './ActiveFieldTracker';

import styled from '../../themeStyled';

interface IConverterProps extends Attributes {
  width?: any;
  className?: string;
  active: boolean;
}

type IConverter = SFC<IConverterProps>;

const BaseConverter: IConverter = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const Converter = styled(BaseConverter)`
  ${width}
  transform-style: preserve-3d;
  > * {
    z-index: 1;
  }
  > :first-child {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  > :last-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  > :not(:first-child) {
    transform: translateY(-1px)
  }
`;

export { Field, ActiveFieldTracker, IActiveFieldTrackerRenderProp };

export default Converter;
