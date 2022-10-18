import PropTypes from 'prop-types';
//import Day from './Day';
import { Wrapper } from './styled';

export default function Month(props) {
    const { value } = props;
    console.log(value.calendar, value);

    if (!value) return;
    return (
        <Wrapper>
            {/* {
                value.calendar.forEach(week => (
                    week.map(day => <Day key={day} day={day} />)
                ))
            } */}
        </Wrapper>
    )
}

Month.propTypes = {
    value: PropTypes.array,
};