import PropTypes from 'prop-types';

import useCalendar from '../../../hooks/useCalendar';
import Month from './Month';

import { OuterWrapper, CalenderWrapper } from './styled';
import TimeRangePicker from './TimeRangePicker';


export default function GridCalendars(props) {
    const { dispatch, duration } = props;
    const { calendar, /* addCalendar */ } = useCalendar();
    console.log(duration);
    return (
        <OuterWrapper>
            <CalenderWrapper>
                {
                    calendar.map(data => {
                        const { month, year } = data;
                        return (
                            <Month
                                key={month + year}
                                value={data}
                                year={year}
                                dispatch={dispatch}
                                duration={duration} />
                        )
                    })
                }
            </CalenderWrapper>
            <TimeRangePicker dispatch={dispatch} duration={duration} />
        </OuterWrapper>
    )
}

GridCalendars.propTypes = {
    dispatch: PropTypes.func,
    duration: PropTypes.array,
};