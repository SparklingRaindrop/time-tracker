import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { getDuration } from '../../JS/stopwatch';
import { getDoubleDigit } from '../../JS/dataParser';

export default function Stopwatch(props) {
    const { start, end, className } = props;
    const { hours, minutes, seconds } = useMemo(() => {
        return getDuration(start, end);
    }, [start, end]);

    return (
        <div className={className}>
            {getDoubleDigit(hours)}:{getDoubleDigit(minutes)}:{getDoubleDigit(seconds)}
        </div>
    )
}

Stopwatch.propTypes = {
    start: PropTypes.string,
    end: PropTypes.string,
    className: PropTypes.string,
};