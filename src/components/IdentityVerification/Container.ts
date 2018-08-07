import { connect } from 'react-redux';

import { actions } from '../../ducks';


const mapDispatchToProps = {
  modalDeactivate: actions.deactivateModal
}

const enhance = connect(null, mapDispatchToProps);

export default enhance;
