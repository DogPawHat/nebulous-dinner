import {
  Component,
  ReactElement
} from 'react';
import currency, { Any as CurrencyInput } from 'currency.js';

const EUR = (value: CurrencyInput) => currency(value, { symbol: '€' });
const GBP = (value: CurrencyInput) => currency(value, { symbol: '£' });

type ICurrencyChange = (value: CurrencyInput) => void;

export type IInputMaskerRenderProp = (value: string, onChange: ICurrencyChange) => ReactElement<HTMLInputElement>;

interface IInputMaskerProps {
  render: IInputMaskerRenderProp;
  defaultValue?: CurrencyInput;
  onChange?: (value: currency) => void;
  type?: 'EUR' | 'GBP';
}


interface IInputMaskerState {
  interalValue: currency;
}

export default class InputMasker extends Component<
  IInputMaskerProps,
  IInputMaskerState
> {
  constructor({ type = 'EUR', defaultValue = 0, ...rest }: IInputMaskerProps) {
    super({ type, defaultValue, ...rest });
    this.state = {
      interalValue: this.internalCurrency(defaultValue)
    };
  }

  public onChange: ICurrencyChange = value => {
    const convertedValue = this.internalCurrency(value);
    this.setState({
      interalValue: convertedValue
    });
    if(this.props.onChange) {
      this.props.onChange(convertedValue)
    }
  };

  get value() {
    return this.state.interalValue.format(true);
  }

  public render() {
    return this.props.render(this.value, this.onChange);
  }

  private internalCurrency = (value: CurrencyInput) => {
    switch (this.props.type) {
      case 'GBP':
        return GBP(value);
      case 'EUR':
      default:
        return EUR(value);
    }
  };
}
