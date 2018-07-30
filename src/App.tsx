import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import styled, { theme } from './themeStyled';
import SiteHeader from './components/SiteHeader';
import NavBar from './components/NavBar';
import Instructions from './components/Instructions';
import Converter, { Field } from './components/Converter';
import { space } from 'styled-system';

const InnerContainer = styled('div')`
  ${space};
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <SiteHeader width={1} px="288px" />
      <InnerContainer mt="54px" mx="288px">
        <NavBar width={`${188 * 3}px`} mb="39px" />
        <Instructions mb="27px" />
        <Converter active={true} width="564px">
          <Field active={true} description="you send" />
          <Field active={false} description="reciver gets" />
        </Converter>
      </InnerContainer>
    </div>
  </ThemeProvider>
);

export default App;
