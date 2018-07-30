import React, { SFC } from 'react';
import { width, space } from 'styled-system';

import styled from '../../themeStyled';
import cfLogo from './logo.svg';

// Interface
interface ISiteHeaderProps {
  className?: string;
  width: any;
}

type ISiteHeader = SFC<ISiteHeaderProps>;

// Styled Component
const Image = styled('img')`
  height: 100%;
`;

const BaseSiteHeader: ISiteHeader = ({ className }) => (
  <header className={className} >
    <Image src={cfLogo} />
  </header>
);

const SiteHeader = styled(BaseSiteHeader)`
  ${width}
  ${space}
  background-color: ${props => props.theme.colors.bg.black};
  height: 66px;
`;

export default SiteHeader;
