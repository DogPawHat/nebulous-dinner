import { connect, MapStateToProps } from 'react-redux';

import { IState } from 'src/ducks';
import { IModalStateProps } from './interfaces';

const mapStateToProps: MapStateToProps<IModalStateProps, {}, IState> = ({modalDisplay}) => ({
  display: modalDisplay
});

const enhance = connect(mapStateToProps);

export default enhance;
