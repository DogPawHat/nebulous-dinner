import { IModal } from './interfaces';
import Container from './Container';
import View from './View';

export { modalMain } from './View';

const Modal: IModal = Container(View);

export default Modal;
