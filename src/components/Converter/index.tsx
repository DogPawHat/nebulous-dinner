import React, {SFC} from 'react';
import ConverterContainer, {
  ConverterContainerChild,
} from './ConverterContainer';
import Field from './Field';
import ActiveFieldTracker, {
  IActiveFieldTrackerRenderProp
} from './ActiveFieldTracker';
import styled from 'react-emotion';

interface IConverterProps {
  className?: string
}

type IConverter = SFC<IConverterProps>;

const FieldChild = styled(Field)`
  ${ConverterContainerChild}
`;

// Render prop for converter
const renderFields: IActiveFieldTrackerRenderProp = (isActive, makeActive) => (
  <>
    <FieldChild
      key="field_1"
      active={isActive('field_1')}
      onClick={makeActive('field_1')}
      description="you send"
    />
    <FieldChild
      key="field_2"
      active={isActive('field_2')}
      onClick={makeActive('field_2')}
      description="reciver gets"
    />
  </>
);

const Converter: IConverter = ({className}) => (
  <ConverterContainer className={className}>
    <ActiveFieldTracker defaultKey="field_1" render={renderFields} />
  </ConverterContainer>
);

export default Converter;
