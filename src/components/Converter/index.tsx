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
  fee: number;
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

const convertCurrency = (money: CurrencyInput, rate: number) => currency(money).multiply(rate);

class Converter extends Component<IConverterProps, IConverterState> {

  public state = {
    eurValue: currency(0),
    gbpValue: currency(0)
  }

  constructor(props: IConverterProps) {
    super(props);
    if(props.defaultCurrency === 'EUR') {
      const defaultMoney = currency(this.props.defaultValue)
      this.state = {
        eurValue: defaultMoney,
        gbpValue: convertCurrency(defaultMoney, props.eurToGbpRate).subtract(props.fee)
      }
      return;
    }

    if(props.defaultCurrency === 'GBP') {
      const defaultMoney = currency(this.props.defaultValue)
      this.state = {
        eurValue: convertCurrency(defaultMoney, 1 / props.eurToGbpRate).subtract(props.fee),
        gbpValue: defaultMoney
      }
      return;
    }
  }

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

  private updateEurValue = (newValue: string) => {
    const newMoney = currency(newValue)
    this.setState({
      eurValue: newMoney,
      gbpValue: convertCurrency(newMoney, this.props.eurToGbpRate).subtract(this.props.fee)
    });
  }

  private updateGbpValue = (newValue: string) => {
    const newMoney = currency(newValue)
    this.setState({
      eurValue: convertCurrency(newMoney, 1 / this.props.eurToGbpRate).subtract(this.props.fee),
      gbpValue: newMoney
    });
  }

  private renderFields: IActiveFieldTrackerRenderProp = (
    isActive,
    makeActive
  ) => (
    <>
      <FieldChild
        key={fieldKeys.EUR}
        value={this.state.eurValue.format(false)}
        updateValue={this.updateEurValue}
        currency="EUR"
        active={isActive(fieldKeys.EUR)}
        onClick={makeActive(fieldKeys.EUR)}
        description="you send"
      />
      <FieldChild
        key={fieldKeys.GBP}
        updateValue={this.updateGbpValue}
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
