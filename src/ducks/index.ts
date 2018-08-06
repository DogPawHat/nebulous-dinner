import currency, { Any as CurrencyInput } from 'currency.js';
import { addDays } from 'date-fns';
import { action, ActionType } from 'typesafe-actions';
import { Reducer } from 'redux';

const UPDATE_CURRENCY = 'currencyfair-converter/main/UPDATE_CURRENCY';
const ACTIVATE_MODAL = 'currencyfair-converter/main/ACTIVATE_MODAL';
const DEACTIVATE_MODAL = 'currencyfair-converter/main/DEACTIVATE_MODAL';

export const actions = {
  updateCurrency: (
    sending: CurrencyInput,
    convert: CurrencyInput
  ) => action(UPDATE_CURRENCY, { sending, convert }),
  activateModal: () => action(ACTIVATE_MODAL),
  deactivateModal: () => action(DEACTIVATE_MODAL)
}

type AppAction = ActionType<typeof actions>;

export interface IState {
  sending: currency;
  convert: currency;
  fee: currency;
  rate: number;
  transactionDate: Date;
  modalDisplay: boolean;
}

const initState: IState = {
  sending: currency(0),
  convert: currency(0),
  fee: currency('2.5'),
  rate: 0.86022,
  transactionDate: addDays(new Date(), 5),
  modalDisplay: false
}

const reducer: Reducer<IState, AppAction> = (state = initState, newAction) => {
  switch(newAction.type) {
    case ACTIVATE_MODAL:
      return {
        ...state,
        modalDisplay: true
      }
    case DEACTIVATE_MODAL:
      return {
        ...state,
        modalDisplay: false
      }
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
