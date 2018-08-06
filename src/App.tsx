import React from 'react';
import styled, { css } from 'react-emotion';

import SiteHeader from './components/SiteHeader';
import NavBar from './components/NavBar';
import Instructions from './components/Instructions';
import Converter from './components/Converter';
import ModalActivateButton from './components/ModalActivateButton';
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
import Modal from './components/Modal';
import ModalDectivateButton from './components/ModalDeactivateButton';

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
  <>
    <AppRoot>
      <HeaderContainerGrid>
        <SiteHeader className={headerGridChild} />
      </HeaderContainerGrid>
      <MainContainerGrid>
        <div className={mainGridChild}>
          <NavBar currentStep="step_1" className={navBarClassName} />
          <Instructions className={instructionClassName} />
          <Converter className={converterClassName} />
          <div className={buttonRowClassName}>
            <ModalActivateButton>Next</ModalActivateButton>
          </div>
          <Footer className={footerClassName} />
        </div>
      </MainContainerGrid>
      <SecondaryContainerGrid>
        <Details
          className={secondaryGridChild}
        />
      </SecondaryContainerGrid>
    </AppRoot>
    <Modal>
      <ModalDectivateButton>Next</ModalDectivateButton>
    </Modal>
  </>
);

export default App;
