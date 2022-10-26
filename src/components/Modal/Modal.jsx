import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { cloneElement } from 'react';
import { Overlay } from './styled';

export default function Modal(props) {
    const { isOpen, content } = props;

    if (!isOpen) return;
    return createPortal(
        <Overlay>
            {cloneElement(content)}
        </Overlay>,
        document.querySelector('body')
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    content: PropTypes.element.isRequired,
};