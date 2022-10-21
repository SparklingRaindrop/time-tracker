import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { getDayStatus } from '../../../../../JS/dataParser';
import { Container } from './styled';

/* 
    status:
        normal
        selected
        within
*/
export default function Day(props) {
    const { day, updateDuration, year, month, duration } = props;
    const status = useMemo(() => getDayStatus(new Date(`${month} ${day} ${year}`), duration), [duration]);

    function handleOnClick() {
        // Empty spots has 0 as placeholder
        if (!day) return;
        updateDuration(new Date(`${month} ${day} ${year}`));
    }

    return (
        <Container
            $day={!day ? '' : day}
            $status={status}
            onClick={handleOnClick} />
    )
}

Day.propTypes = {
    year: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    day: PropTypes.number.isRequired,
    updateDuration: PropTypes.func,
    duration: PropTypes.array,
};