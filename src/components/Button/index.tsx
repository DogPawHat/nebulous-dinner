import styled from '../../themeStyled';

const Button = styled('button')`
  border-radius: 4px;
  border: 1px solid #589ab8;
  color: #ffffff;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.medium};
  background-color: #6ec0e6;
  padding: 18px 15px 18px 13px;
  line-height: 19px;
`;

export default Button;
