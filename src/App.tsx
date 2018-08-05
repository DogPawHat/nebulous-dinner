import React from 'react';
import styled, { css } from 'react-emotion';

import SiteHeader from './components/SiteHeader';
import NavBar from './components/NavBar';
import Instructions from './components/Instructions';
import Converter from './components/Converter';
import Button from './components/Button';
import Footer from './components/Footer';
import {
  MainGrid,
  HeaderContainerGrid,
  MainContainerGrid,
  SecondaryContainerGrid,
  headerGridChild,
  mainGridChild,
  secondaryGridChild
} from './grids';
import Details from './components/Details';

// CSS Class Names
const navBarClassName = 'App__navbar';
const instructionClassName = 'App__instructions';
const converterClassName = 'App__converter';
const buttonRowClassName = 'App__button';
const footerClassName = 'App__footer';

// Mixins
const containerChildWidth = css`
  width: 100%;
`;

// Styled root
const AppRoot = styled(MainGrid)`
  .${navBarClassName} {
    ${containerChildWidth} margin-bottom: 2.45rem;
  }
  .${instructionClassName} {
    ${containerChildWidth} margin-bottom: 1.70rem;
  }
  .${converterClassName} {
    ${containerChildWidth} margin-bottom: 2.25rem;
  }
  .${buttonRowClassName} {
    ${containerChildWidth} margin-bottom: 3.75rem;
  }
  .${footerClassName} {
    ${containerChildWidth};
  }
`;

// Main component
const App = () => (
  <AppRoot>
    <HeaderContainerGrid>
      <SiteHeader className={headerGridChild} />
    </HeaderContainerGrid>
    <MainContainerGrid>
      <div className={mainGridChild}>
        <NavBar currentStep="step_1" className={navBarClassName} />
        <Instructions className={instructionClassName} />
        <Converter
          defaultCurrency="EUR"
          defaultValue={2000}
          eurToGbpRate={0.86022}
          fee={2.50}
          className={converterClassName}
        />
        <div className={buttonRowClassName}>
          <Button>Next</Button>
        </div>
        <Footer className={footerClassName} />
      </div>
    </MainContainerGrid>
    <SecondaryContainerGrid>
      <Details
        className={secondaryGridChild}
        sending="€2000.00"
        reciving="£1717.94"
        rate="0.8.6022"
        date="25th November"
        fee="£2.50"
        savings="£66.19"
      />
    </SecondaryContainerGrid>
  </AppRoot>
);

export default App;
