import PropTypes from 'prop-types';
import { Wrapper, ControllerIcon } from './styled';

export default function Controller(props) {
    const { names } = props;

    return (
        <Wrapper>
            {
                names.map(name => <ControllerIcon key={name} name={name} />)
            }
        </Wrapper>
    )
}

Controller.propTypes = {
    names: PropTypes.array.isRequired
};