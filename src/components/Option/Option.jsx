import PropTypes from 'prop-types';
import { getDoubleDigit } from '../../JS/dataParser';
import { Wrapper } from './styled';

export default function Option(props) {
    const { value, disabled } = props;

    return (
        <Wrapper value={value} disabled={disabled}>
            {getDoubleDigit(value)}
        </Wrapper>
    )
}

Option.propTypes = {
    value: PropTypes.number,
    disabled: PropTypes.bool,
};