import React, { SFC, HTMLAttributes } from 'react';
import styled from 'react-emotion';

import cfLogo from './logo.svg';
import { colors } from '../../styleUtils';

// Interface
interface ISiteHeaderProps extends HTMLAttributes<HTMLElement>{
}

type ISiteHeader = SFC<ISiteHeaderProps>;

const imgClassName = 'SiteHeader__image';

const SiteHeaderRoot = styled('header')`
  background-color: ${colors.black};
  height: 4.15rem;
  .${imgClassName} {
    height: 100%;
  }
`;

const SiteHeader: ISiteHeader = ({ className }) => (
  <SiteHeaderRoot className={className} >
    <img className={imgClassName} src={cfLogo} />
  </SiteHeaderRoot>
);

export default SiteHeader;
