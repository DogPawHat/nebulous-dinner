import { connect, MapStateToProps } from 'react-redux';

import { IState, updateCurrency } from '../../ducks';
import { IConverterStateProps, IConverterOwnProps, IConverterDispatchProps } from './interfaces';

const mapStateToProps: MapStateToProps<
  IConverterStateProps,
  IConverterOwnProps,
  IState
> = state => ({
  defaultValue: state.sending,
  defaultCurrency: 'EUR',
  eurToGbpRate: state.rate,
  fee: state.fee
});

const mapDispactchToProps: IConverterDispatchProps = {
  notifyUpdate: updateCurrency
};

const enhance = connect(mapStateToProps, mapDispactchToProps);

export default enhance;
