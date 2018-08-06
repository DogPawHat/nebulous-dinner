import { connect, MapDispatchToPropsFunction } from 'react-redux';

import { actions } from 'src/ducks';

import { IModalActivateButton } from './interfaces';


const mapDispatchToProps: MapDispatchToPropsFunction<IModalActivateButton, {}> = dispatch => ({
  onClick: (event) => dispatch(actions.activateModal())
})

const enhance = connect(null, mapDispatchToProps);

export default enhance;
