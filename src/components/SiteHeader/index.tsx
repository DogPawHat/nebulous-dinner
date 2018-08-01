import React, { SFC, HTMLAttributes } from 'react';
import styled from 'react-emotion';

import cfLogo from './logo.svg';
import { colors } from '../../styleUtils';

// Interface
interface ISiteHeaderProps extends HTMLAttributes<HTMLElement>{
}

type ISiteHeader = SFC<ISiteHeaderProps>;

const BaseSiteHeader: ISiteHeader = ({ className }) => (
  <header className={className} >
    <img src={cfLogo} />
  </header>
);

const SiteHeader = styled(BaseSiteHeader)`
  background-color: ${colors.black};
  height: 4.125rem;
  img {
    height: 100%;
  }
`;

export default SiteHeader;
