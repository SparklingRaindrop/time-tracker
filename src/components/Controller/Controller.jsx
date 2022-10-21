import PropTypes from 'prop-types';
import { Wrapper, ControllerButton } from './styled';

/* 
    buttons = [{
        name: string,
        function: func
    }]

    name = stop, start, remove
*/

export default function Controller(props) {
    const { buttons, disabled } = props;

    return (
        <Wrapper>
            {
                buttons.map(({ name, onClick }) => (
                    <ControllerButton
                        key={name}
                        name={name}
                        onClick={onClick}
                        disabled={disabled} />
                ))
            }
        </Wrapper>
    )
}

Controller.propTypes = {
    buttons: PropTypes.array.isRequired,
    disabled: PropTypes.bool,
};