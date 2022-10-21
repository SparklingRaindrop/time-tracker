import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
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
    //const status = useMemo(() => getDayStatus(new Date(`${month} ${day} ${year}`), duration), [duration]);
    const [status, setStatus] = useState(getDayStatus(dateValue, duration));

    useEffect(() => {
        // Calender contains 0 as placeholder
        if (day === 0) return;
        const test = getDayStatus(dateValue, duration);
        setStatus(test);
    }, [duration]);

    function handleOnClick() {
        if (day === 0) return;
        dispatch({
            type: 'date',
            value: new Date(`${month} ${day} ${year}`)
        });
    }
    if (day === 18) {
        console.log('status:', status, dateValue)
        console.log(duration)
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
    dispatch: PropTypes.func,
    duration: PropTypes.array,
};