import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { getDayStatus } from '../../../../../JS/dataParser';
import { Container } from './styled';

/* 
    status:
        normal
        selected
        within
*/
export default function Day(props) {
    const { day, dispatch, year, month, duration } = props;
    const dateValue = new Date(`${month} ${day} ${year}`);
    const [status, setStatus] = useState(getDayStatus(dateValue, duration));
    const ref = useRef(null);

    useEffect(() => {
        // Calender contains 0 as placeholder
        if (day === 0) return;
        const test = getDayStatus(dateValue, duration);
        setStatus(test);
    }, [duration]);

    useEffect(() => {
        if (ref.current && status === 'selected') {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [ref]);

    function handleOnClick() {
        if (day === 0) return;
        dispatch({
            type: 'date',
            value: dateValue
        });
    }

    return (
        <Container
            $day={!day ? '' : day}
            $status={status}
            ref={ref}
            onClick={handleOnClick} />
    )
}

Day.propTypes = {
    year: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    day: PropTypes.number.isRequired,
    dispatch: PropTypes.func,
    duration: PropTypes.array,
    ref: PropTypes.object,
};