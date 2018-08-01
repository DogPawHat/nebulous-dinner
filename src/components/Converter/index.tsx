
import styled from 'react-emotion'

import Field from './Field';
import ActiveFieldTracker, {
  IActiveFieldTrackerRenderProp
} from './ActiveFieldTracker';

const Converter = styled('div')`
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
