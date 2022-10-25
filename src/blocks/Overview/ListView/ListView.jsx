import PropTypes from 'prop-types';

import { List, Modal } from '../../../components';
import { Wrapper } from './styled';

export default function ListView(props) {
    const { children, isOpen, ModalContent } = props;
    return (
        <Wrapper>
            <List separate>
                {children}
            </List>
            <Modal isOpen={isOpen} content={ModalContent} />
        </Wrapper>
    )
}

ListView.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    ModalContent: PropTypes.element.isRequired,
    children: PropTypes.node.isRequired,
};