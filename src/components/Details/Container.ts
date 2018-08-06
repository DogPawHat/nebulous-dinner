import { connect, MapStateToProps } from 'react-redux';
import currency, { Any as CurrencyInput } from 'currency.js';
import { format } from 'date-fns';

import { IState } from '../../ducks';
import { IDetailsStateProps, IDetailsOwnProps } from './interfaces';

const EURO = (value: CurrencyInput) =>
  currency(value, { symbol: '€' });
const POUNDS = (value: CurrencyInput) =>
  currency(value, { symbol: '£' });

const mapStateToProps: MapStateToProps<
  IDetailsStateProps,
  IDetailsOwnProps,
  IState
> = state => ({
  sending: EURO(state.sending).format(true),
  reciving: POUNDS(state.convert).format(true),
  rate: state.rate.toString(),
  fee: POUNDS(state.sending).format(true),
  date: format(state.transactionDate, 'Do MMMM'),
  savings: "£66.19"
});

const enhance = connect(mapStateToProps);

export default enhance;
