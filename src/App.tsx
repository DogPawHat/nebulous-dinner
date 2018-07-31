import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import styled, { theme } from './themeStyled';
import SiteHeader from './components/SiteHeader';
import NavBar from './components/NavBar';
import Instructions from './components/Instructions';
import Converter, {
  Field,
  ActiveFieldTracker,
  IActiveFieldTrackerRenderProp
} from './components/Converter';
import { space } from 'styled-system';

const InnerContainer = styled('div')`
  ${space};
`;

const renderFields: IActiveFieldTrackerRenderProp = (isActive, makeActive) => (
  <>
    <Field
      key="field_1"
      active={isActive('field_1')}
      onClick={makeActive('field_1')}
      description="you send"
    />
    <Field
      key="field_2"
      active={isActive('field_2')}
      onClick={makeActive('field_2')}
      description="reciver gets"
    />
  </>
);

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <SiteHeader width={1} px="288px" />
      <InnerContainer mt="54px" mx="288px">
        <NavBar width={`${188 * 3}px`} mb="39px" />
        <Instructions mb="27px" />
        <Converter active={true} width="564px">
          <ActiveFieldTracker defaultKey="field_1" render={renderFields} />
        </Converter>
      </InnerContainer>
    </div>
  </ThemeProvider>
);

export default App;
