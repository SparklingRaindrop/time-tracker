import PropTypes from 'prop-types';

import useCalendar from '../../../hooks/useCalendar';

import Month from './Month';
import TimeRangePicker from './TimeRangePicker';
import { OuterWrapper, CalenderWrapper } from './styled';
import { Button } from '../../../components';


export default function GridCalendars(props) {
    const { dispatch, duration } = props;
    const { calendar, addCalendar } = useCalendar();

    return (
        <OuterWrapper>
            <CalenderWrapper>
                <Button label='Show Previous Year' onClick={() => addCalendar(-1)} />
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
                <Button label='Show Next Year' onClick={() => addCalendar(1)} />
            </CalenderWrapper>
            <TimeRangePicker dispatch={dispatch} duration={duration} />
        </OuterWrapper>
    )
}

GridCalendars.propTypes = {
    dispatch: PropTypes.func,
    duration: PropTypes.array,
};