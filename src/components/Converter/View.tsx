import React, { Component } from 'react';
import currency, { Any as CurrencyInput } from 'currency.js';
import styled, { cx } from 'react-emotion';

import {
  converterContainerClassName,
  converterContainerChildClassName
} from './converterContainer';
import Field from './Field';
import ActiveFieldTracker, {
  IActiveFieldTrackerRenderProp
} from './ActiveFieldTracker';

import { IConverterProps } from './interfaces';

interface IState {
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

const convertCurrency = (money: CurrencyInput, rate: number) =>
  currency(money).multiply(rate);

const currencyLessThen = (a: CurrencyInput, b: CurrencyInput) =>
  currency(a).value <= currency(b).value;

/**
 * Displays two fields to convert between euro and pounds
 *
 */
class View extends Component<IConverterProps, IState> {
  /**
   * React state
   * Contains the value of the euro and pound inputs
   */
  public state = {
    eurValue: currency(0),
    gbpValue: currency(0)
  };

  /**
   * Creates the componenet
   * @param props Contains default values as well as the converison rate and fee
   */
  constructor(props: IConverterProps) {
    super(props);

    // If the default currency is in euros
    if (props.defaultCurrency === 'EUR') {
      const defaultMoney = currency(this.props.defaultValue);

      // If the value is 0 OR the result is less then the fee
      if (
        defaultMoney.value === 0 ||
        currencyLessThen(
          convertCurrency(defaultMoney, this.props.eurToGbpRate),
          this.props.fee
        )
      ) {
        // The result of the converison will be completly eating by the fee,
        // Leaving the reciver with nothing
        // Probaly would be an error message in a production app
        this.state = {
          eurValue: defaultMoney,
          gbpValue: currency(0)
        };
      } else {
        // Convert the currency to pounds
        // Then subtract the fee
        this.state = {
          eurValue: defaultMoney,
          gbpValue: convertCurrency(
            defaultMoney,
            this.props.eurToGbpRate
          ).subtract(this.props.fee)
        };
      }

      // Return the componet, do not go to next if statement
      return this;
    }

    // If the default currency is in pounds
    if (props.defaultCurrency === 'GBP') {
      const defaultMoney = currency(this.props.defaultValue);
      // If the value is 0
      if (defaultMoney.value === 0) {
        this.state = {
          eurValue: currency(0),
          gbpValue: currency(0)
        };
      } else {
        // Add the fee back to the pound value
        // (Remember, this is the reverse of the euro operation)
        // Then convert to euro
        this.state = {
          eurValue: convertCurrency(
            defaultMoney.add(this.props.fee),
            1 / this.props.eurToGbpRate
          ),
          gbpValue: defaultMoney
        };
      }
      return this;
    }
  }

  /**
   * Update any listners
   * Used to keep the Redux dispatcher up to date
   * @param prevProps last version of props
   * @param prevState last version of state
   */
  public componentDidUpdate(prevProps: IConverterProps, prevState: IState) {
    if (
      (this.state.eurValue !== prevState.eurValue ||
        this.state.gbpValue !== prevState.gbpValue) &&
      this.props.notifyUpdate
    ) {
      this.props.notifyUpdate(this.state.eurValue, this.state.gbpValue);
    }
  }

  /**
   * React render method
   */
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

  // Dynamic onChange handlers
  // See construtor for details on logic

  private updateEurValue = (newValue: string) => {
    const newMoney = currency(newValue);
    if (
      newMoney.value === 0 ||
      currencyLessThen(newMoney.value, this.props.fee)
    ) {
      this.setState({
        eurValue: newMoney,
        gbpValue: currency(0)
      });
    } else {
      this.setState({
        eurValue: newMoney,
        gbpValue: convertCurrency(newMoney, this.props.eurToGbpRate).subtract(
          this.props.fee
        )
      });
    }
  };

  private updateGbpValue = (newValue: string) => {
    const newMoney = currency(newValue);
    if (newMoney.value === 0) {
      this.setState({
        eurValue: currency(0),
        gbpValue: currency(0)
      });
    } else {
      this.setState({
        eurValue: convertCurrency(
          newMoney.add(this.props.fee),
          1 / this.props.eurToGbpRate
        ),
        gbpValue: newMoney
      });
    }
  };


  /**
   * Render prop for ActiveFieldTracker
   * The purpose of ActiveFieldTracker is to track the currently selected field,
   * which will be highlighted in blue.
   * Otherwise these are normal React controlled form components
   */
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

export default View;
