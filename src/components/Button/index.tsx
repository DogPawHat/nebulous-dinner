import styled from 'react-emotion';
import { fontSizes, fontWeights } from '../../styleUtils';

const Button = styled('button')`
  border-radius: 4px;
  border: 1px solid #589ab8;
  color: #ffffff;
  font-size: ${fontSizes.medium};
  font-weight: ${fontWeights.medium};
  background-color: #6ec0e6;
  padding: 15px 18px 13px;
  line-height: 19px;
`;

export default Button;
