import PropTypes from 'prop-types';
import Day from './Day';
import { Wrapper, DayOfWeek } from './styled';

export default function Month(props) {
    const { value } = props;

    if (!value) return;
    return (
        <Wrapper>
            {
                value.weekdaysAbbr.map(day => <DayOfWeek key={day}>{day}</DayOfWeek>)
            }
            {
                value.calendar.map(week => (
                    week.map((day, index) => <Day key={`${day}${index}`} day={day} />)
                ))
            }
        </Wrapper>
    )
}

Month.propTypes = {
    value: PropTypes.object,
};