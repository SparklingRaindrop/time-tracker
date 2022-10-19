import PropTypes from 'prop-types';
import { Wrapper } from './styled';

export default function Button(props) {
    const { label, onClick } = props;
    return (
        <Wrapper onClick={onClick}>{label}</Wrapper>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};