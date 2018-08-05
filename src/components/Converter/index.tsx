import React, { Component } from 'react';
import {
  converterContainerClassName,
  converterContainerChildClassName
} from './converterContainer';
import Field from './Field';
import ActiveFieldTracker, {
  IActiveFieldTrackerRenderProp
} from './ActiveFieldTracker';
import styled, { cx } from 'react-emotion';
import currency, { Any as CurrencyInput } from 'currency.js';



type currencyType = 'EUR' | 'GBP';

interface IConverterProps {
  className?: string;
  defaultCurrency: currencyType;
  defaultValue: CurrencyInput;
  eurToGbpRate: number;
}

interface IConverterState {
  eurValue: currency;
  gbpValue: currency;
}

const fieldKeys = {
  EUR: 'euro_field',
  GBP: 'pound_field'
};

const FieldChild = styled(Field)`
  ${converterContainerChildClassName};
`;

class Converter extends Component<IConverterProps, IConverterState> {
  public render() {
    return (
      <div className={cx(this.props.className, converterContainerClassName)}>
        <ActiveFieldTracker
          defaultKey={fieldKeys[this.props.defaultCurrency]}
          render={this.renderFields}
        />
      </div>
    );
  }

  private renderFields: IActiveFieldTrackerRenderProp = (
    isActive,
    makeActive
  ) => (
    <>
      <FieldChild
        key={fieldKeys.EUR}
        value={this.state.eurValue.format(false)}
        currency="EUR"
        active={isActive(fieldKeys.EUR)}
        onClick={makeActive(fieldKeys.EUR)}
        description="you send"
      />
      <FieldChild
        key="field_2"
        value={this.state.gbpValue.format(false)}
        currency="GBP"
        active={isActive(fieldKeys.GBP)}
        onClick={makeActive(fieldKeys.GBP)}
        description="reciver gets"
      />
    </>
  );
}

export default Converter;
