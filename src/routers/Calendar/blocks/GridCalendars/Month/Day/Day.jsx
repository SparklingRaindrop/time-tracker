import PropTypes from 'prop-types';
import { Container } from './styled';

export default function Day(props) {
    const { day } = props;

    return (
        <Container $day={day === 0 ? '' : day} />
    )
}

Day.propTypes = {
    day: PropTypes.number,
};