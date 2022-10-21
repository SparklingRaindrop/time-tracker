import PropTypes from 'prop-types';
import Day from './Day';
import { Wrapper, DayOfWeek } from './styled';

export default function Month(props) {
    const { value, updateDuration, year, duration } = props;

    if (!value) return;
    return (
        <>
            <h3>{value.month}</h3>
            <Wrapper>
                {
                    value.weekdaysAbbr.map(day => <DayOfWeek key={day}>{day}</DayOfWeek>)
                }
                {
                    value.calendar.map(week => (
                        week.map((day, index) => (
                            <Day
                                key={`${day}${index}`}
                                day={day}
                                year={year}
                                month={value.month}
                                updateDuration={updateDuration}
                                duration={duration} />
                        ))
                    ))
                }
            </Wrapper>
        </>
    )
}

Month.propTypes = {
    value: PropTypes.object.isRequired,
    year: PropTypes.string.isRequired,
    updateDuration: PropTypes.func,
    duration: PropTypes.array,
};