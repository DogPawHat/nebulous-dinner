import React, { SFC, HTMLAttributes } from 'react';
import styled from '../../themeStyled';

interface IFooterProps extends HTMLAttributes<HTMLElement>{

};

type IFooter = SFC<IFooterProps>;

const BaseFooter: IFooter = ({...otherProps}) => (
  <footer {...otherProps}>
    <p className='copyright'>© 2016 CurrencyFair</p>
    <nav className='linkbar'>
      <a>Help & Support</a>
      <a>Legal Stuff</a>
    </nav>
  </footer>
);


const Footer = styled(BaseFooter)`
  width: 564px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: baseline;
  border-top: 1px solid #eeeeee;

  p, a {
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: ${props => props.theme.fontWeights.medium};
  }

  p.copyright {
    color: ${props => props.theme.colors.text.grey};
  }

  nav.linkbar {
    display: flex;
    justify-content: space-between;
    flex: 0 1 157px;
  }

  nav.linkbar a {
    color: ${props => props.theme.colors.text.blue};
  }
`;

export default Footer
