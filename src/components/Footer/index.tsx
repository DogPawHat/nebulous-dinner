import React, { SFC, HTMLAttributes } from 'react';
import styled from 'react-emotion';
import { colors, fontWeights, fontSizes } from '../../styleUtils';

interface IFooterProps extends HTMLAttributes<HTMLElement>{

};

type IFooter = SFC<IFooterProps>;


const linkbar = 'Footer__linkBar';
const anchor = 'Footer__anchor';
const copyright = 'Footer__copyright';

const FooterRoot = styled('footer')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: baseline;
  border-top: 1px solid #eeeeee;
  padding-top: 0.875rem;

  .${copyright}, .${linkbar} .${anchor} {
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

  .${anchor} {
    color: ${colors.blue};
  }
`;

const Footer: IFooter = ({...otherProps}) => (
  <FooterRoot {...otherProps}>
    <p className={copyright}>© 2016 CurrencyFair</p>
    <nav className={linkbar}>
      <a className={anchor}>Help & Support</a>
      <a className={anchor}>Legal Stuff</a>
    </nav>
  </FooterRoot>
);




export default Footer
