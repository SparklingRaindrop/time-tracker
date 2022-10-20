import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { getDoubleDigit, getDuration } from '../../JS/stopwatch';

export default function Stopwatch(props) {
    const { start, end } = props;
    const { hours, minutes, seconds } = useMemo(() => {
        return getDuration(start, end);
    }, [start, end]);

    return (
        <div>
            {getDoubleDigit(hours)}:{getDoubleDigit(minutes)}:{getDoubleDigit(seconds)}
        </div>
    )
}

Stopwatch.propTypes = {
    start: PropTypes.string,
    end: PropTypes.string,
};