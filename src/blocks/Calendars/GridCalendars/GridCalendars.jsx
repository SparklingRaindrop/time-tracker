import PropTypes from 'prop-types';

import useCalendar from '../../../hooks/useCalendar';
import Month from './Month';

import { OuterWrapper } from './styled';


export default function GridCalendars(props) {
    const { updateDuration, duration } = props;
    const { calendar, /* addCalendar */ } = useCalendar();

    return (
        <OuterWrapper>
            {
                calendar.map(data => {
                    const { month, year } = data;
                    return (
                        <Month
                            key={month + year}
                            value={data}
                            year={year}
                            updateDuration={updateDuration}
                            duration={duration} />
                    )
                })
            }
        </OuterWrapper>
    )
}

GridCalendars.propTypes = {
    updateDuration: PropTypes.func,
    duration: PropTypes.array,
};