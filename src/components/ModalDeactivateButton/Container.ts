import { connect, MapDispatchToPropsFunction } from 'react-redux';

import { actions } from 'src/ducks';

import { IModalDeactivateButton } from './interfaces';


const mapDispatchToProps: MapDispatchToPropsFunction<IModalDeactivateButton, {}> = dispatch => ({
  onClick: (event) => dispatch(actions.deactivateModal())
})

const enhance = connect(null, mapDispatchToProps);

export default enhance;
