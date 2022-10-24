import PropTypes from 'prop-types';
import Day from './Day';
import { Wrapper, DayOfWeek } from './styled';

export default function Month(props) {
    const { value, dispatch, year, duration } = props;

    if (!value) return;
    const { month, calendar, weekdaysAbbr } = value;

    return (
        <div>
            {month === 'January' && <h2>{year}</h2>}
            <h3>{month}</h3>
            <Wrapper>
                {
                    weekdaysAbbr.map(day => <DayOfWeek key={day}>{day}</DayOfWeek>)
                }
                {
                    calendar.map(week => (
                        week.map((day, index) => (
                            <Day
                                key={`${day}${index}`}
                                day={day}
                                year={year}
                                month={month}
                                dispatch={dispatch}
                                duration={duration} />
                        ))
                    ))
                }
            </Wrapper>
        </div>
    )
}


Month.propTypes = {
    value: PropTypes.object.isRequired,
    year: PropTypes.string.isRequired,
    dispatch: PropTypes.func,
    duration: PropTypes.array,
};