import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from './themeStyled';
import SiteHeader from './components/SiteHeader';
import NavBar from './components/NavBar';
import Instructions from './components/Instructions';
import ConverterField from './components/ConverterField';

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <SiteHeader width={1} />
      <NavBar width={`${188 * 3}px`} />
      <Instructions />
      <ConverterField active={true} description="you send" width="564px" />
      <ConverterField active={false} description="reciver gets" width="564px" />
    </div>
  </ThemeProvider>
);

export default App;
