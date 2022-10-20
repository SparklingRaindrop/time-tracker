import PropTypes from 'prop-types';
import { Wrapper, ControllerButton } from './styled';

/* 
    buttons = [{
        name: string,
        function: func
    }]

*/
export default function Controller(props) {
    const { buttons } = props;

    return (
        <Wrapper>
            {
                buttons.map(name => (
                    <ControllerButton
                        key={name}
                        name={name}
                        onClick={() => console.log('test')} />
                ))
            }
        </Wrapper>
    )
}

Controller.propTypes = {
    buttons: PropTypes.array.isRequired
};