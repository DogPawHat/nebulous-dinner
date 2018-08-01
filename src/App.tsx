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

const width = css`
  width: 35.25rem;
`;

const headerPadding = css`
  padding: 0 16rem;
`;

const containerMargin = css`
  margin: 3.375rem 16rem 0;
`;

const navBarMargin = css`
  ${width}
  margin-bottom: 2.4375rem;
`;

const instructionsMb = css`
  margin-bottom: 1.6875rem;
`;

const converterWidthMb = css`
  ${width}
  margin-bottom: 2.25rem;
`

const ButtonRow = styled('div')`
  margin-bottom: 3.75rem;
`;

const App = () => (
    <div>
      <SiteHeader className={headerPadding} />
      <div className={containerMargin}>
        <NavBar currentStep="step_1" className={navBarMargin} />
        <Instructions className={instructionsMb} />
        <Converter className={converterWidthMb}>
          <ActiveFieldTracker defaultKey="field_1" render={renderFields} />
        </Converter>
        <ButtonRow>
          <Button>Next</Button>
        </ButtonRow>
        <Footer className={width}/>
      </div>
    </div>
);

export default App;
