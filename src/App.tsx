import React from 'react';
import styled, { css } from 'react-emotion';

import SiteHeader from './components/SiteHeader';
import NavBar from './components/NavBar';
import Instructions from './components/Instructions';
import Converter, {
  Field,
  ActiveFieldTracker,
  IActiveFieldTrackerRenderProp
} from './components/Converter';
import Button from './components/Button';
import Footer from './components/Footer';
import { colors } from './styleUtils';

// CSS Class Names

const headerContainerClassName = 'App__header_container';
const headerClassName = 'App__header';
const mainContainerClassName = 'App__main_container';
const subMainColumnClassName = 'App__sub-main';
const subSecondClassName = 'App__sub-second';
const secondaryContainerClassName = 'App__secondary_container';
const navBarClassName = 'App__navbar';
const instructionClassName = 'App__instructions';
const converterClassName = 'App__converter';
const buttonRowClassName = 'App__button';
const footerClassName = 'App__footer';

// Grid Math
const mainColumn = 35.25;
const spaceBetween = 3.30;
const secondColumn = 19.50;

const headerWidth = mainColumn + (spaceBetween * 2) + secondColumn;

// Mixins

const containerChildWidth = css`
  width: 100%;
`;

// Styled root
const AppRoot = styled('div')`
  display: grid;
  width: 100%;
  height: 100%;
  grid:
    'header header header header' 4.15rem
    'main main secondary secondary' auto
    / auto ${(mainColumn + spaceBetween)}rem ${(secondColumn + spaceBetween)}rem auto;

  .${headerContainerClassName} {
    grid-area: header;
    background-color: ${colors.black};
    display: grid;
    grid:
      '. sub-header .' auto
      / auto ${headerWidth}rem auto;
  }
  .${mainContainerClassName} {
    grid-area: main;
    display: grid;
    grid:
      '. . .' ${spaceBetween}rem
      '. sub-main .' 100%
      / auto ${mainColumn}rem ${spaceBetween}rem;
  }
  .${secondaryContainerClassName} {
    grid-area: secondary;
    background-color: #fafafa;
    display: grid;
    grid:
    '. . .' ${spaceBetween}rem
      '. sub-second .' auto
      / ${spaceBetween}rem ${secondColumn}rem auto;
  }

  .${headerClassName} {
    grid-area: sub-header;
  }
  .${subMainColumnClassName} {
    grid-area: sub-main;
  }
  .${subSecondClassName} {
    grid-area: sub-second;
  }

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

// Render prop for converter
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

// Main component
const App = () => (
  <AppRoot>
    <div className={headerContainerClassName}>
      <SiteHeader className={headerClassName} />
    </div>
    <div className={mainContainerClassName}>
      <div className={subMainColumnClassName}>
        <NavBar currentStep="step_1" className={navBarClassName} />
        <Instructions className={instructionClassName} />
        <Converter className={converterClassName}>
          <ActiveFieldTracker defaultKey="field_1" render={renderFields} />
        </Converter>
        <div className={buttonRowClassName}>
          <Button>Next</Button>
        </div>
        <Footer className={footerClassName} />
      </div>
    </div>
    <div className={secondaryContainerClassName}>
      <div className={subSecondClassName} >
        <div className={css`
          width: 100%;
          height: 30rem;
          border-radius: 4px;
          border: 1px solid #e0e0e0;
        `} />
      </div>
    </div>
  </AppRoot>
);

export default App;
