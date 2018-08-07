import React, { SFC, HTMLAttributes } from 'react';
import styled from 'react-emotion';
import { colors, fontWeights, fontSizes } from '../../styleUtils';

import Anchor from '../Anchor';

interface IFooterProps extends HTMLAttributes<HTMLElement>{

};

type IFooter = SFC<IFooterProps>;


const linkbar = 'Footer__linkBar';
const copyright = 'Footer__copyright';

const FooterRoot = styled('footer')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: baseline;
  border-top: 1px solid #eeeeee;
  padding-top: 0.875rem;

  .${copyright} {
    font-size: ${fontSizes.small};
    font-weight: ${fontWeights.medium};
  }

  .${copyright} {
    color: ${colors.grey};
  }

  .${linkbar} {
    display: flex;
    justify-content: space-between;
    flex: 0 1 157px;
  }
`;

const Footer: IFooter = ({...otherProps}) => (
  <FooterRoot {...otherProps}>
    <p className={copyright}>© 2016 CurrencyFair</p>
    <nav className={linkbar}>
      <Anchor>Help & Support</Anchor>
      <Anchor>Legal Stuff</Anchor>
    </nav>
  </FooterRoot>
);




export default Footer
