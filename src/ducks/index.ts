import currency, { Any as CurrencyInput } from 'currency.js';
import { addDays } from 'date-fns';
import { action, ActionType } from 'typesafe-actions';
import { Reducer } from 'redux';

const UPDATE_CURRENCY = 'currencyfair-converter/main/UPDATE_CURRENCY'

export const updateCurrency = (
  sending: CurrencyInput,
  convert: CurrencyInput
) => action(UPDATE_CURRENCY, { sending, convert });

type AppAction = ActionType<typeof updateCurrency>;

export interface IState {
  sending: currency;
  convert: currency;
  fee: currency;
  rate: number;
  transactionDate: Date;
}

const initState: IState = {
  sending: currency(0),
  convert: currency(0),
  fee: currency('2.5'),
  rate: 0.86022,
  transactionDate: addDays(new Date(), 5)
}

const reducer: Reducer<IState, AppAction> = (state = initState, newAction) => {
  switch(newAction.type) {
    case UPDATE_CURRENCY:
      return {
        ...state,
        sending: currency(newAction.payload.sending),
        convert: currency(newAction.payload.convert)
      }
    default:
      return state;
  }
}

export default reducer
