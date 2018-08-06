import { Any as CurrencyInput} from 'currency.js';
import { ComponentClass, SFC } from 'react';

type currencyType = 'EUR' | 'GBP';

export interface IConverterStateProps {
  className?: string;
  defaultCurrency: currencyType;
  defaultValue: CurrencyInput;
  eurToGbpRate: number;
  fee: CurrencyInput;
}

export interface IConverterDispatchProps {
  notifyUpdate?: (sending: CurrencyInput, convert: CurrencyInput) => void;
}

export interface IConverterOwnProps {
  className?: string
}

export type IConverterProps = IConverterStateProps & IConverterDispatchProps & IConverterStateProps;

export type IConverter = ComponentClass<IConverterOwnProps> | SFC<IConverterOwnProps>
