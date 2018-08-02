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




const headerContainerClassName = 'App__header_container';
const headerClassName = 'App__header';
const mainContainerClassName = 'App__main_container';
const navBarClassName = 'App__navbar';
const instructionClassName = 'App__instructions';
const converterClassName = 'App__converter';
const buttonRowClassName = 'App__button';
const footerClassName = 'App__footer';

const containerChildWidth = css`
  width: 100%;
`;

const containerPadding = css`
  padding: 0 1.5rem;
`;

const AppRoot = styled('div')`
  .${headerContainerClassName} {
    background-color: ${colors.black};
    width: 100%;
  }
  .${headerClassName} {
    ${containerPadding}
    width: 100%;
    max-width: 35.25rem;
    margin: 0 auto;
  }
  .${mainContainerClassName} {
    ${containerPadding}
    width: 100%;
    max-width: 35.25rem;
    margin: 3.375rem auto 0;
  }
  .${navBarClassName} {
    ${containerChildWidth}
    margin-bottom: 2.4375rem;
  };
  .${instructionClassName} {
    ${containerChildWidth}
    margin-bottom: 1.6875rem;
  }
  .${converterClassName} {
    ${containerChildWidth}
    margin-bottom: 2.25rem;
  }
  .${buttonRowClassName} {
    ${containerChildWidth}
    margin-bottom: 3.75rem;
  }
  .${footerClassName} {
    ${containerChildWidth}
  }
`;

const App = () => (
    <AppRoot>
      <div className={headerContainerClassName} >
        <SiteHeader className={headerClassName} />
      </div>
      <div className={mainContainerClassName}>
        <NavBar currentStep="step_1" className={navBarClassName} />
        <Instructions className={instructionClassName} />
        <Converter className={converterClassName}>
          <ActiveFieldTracker defaultKey="field_1" render={renderFields} />
        </Converter>
        <div className={buttonRowClassName}>
          <Button>Next</Button>
        </div>
        <Footer className={footerClassName}/>
      </div>
    </AppRoot>
);

export default App;
