import PropTypes from 'prop-types';

import useCalendar from '../../../hooks/useCalendar';

import Month from './Month';
import TimeRangePicker from './TimeRangePicker';
import { Wrapper, CalenderWrapper, Calender } from './styled';
import { Button } from '../../../components';


export default function GridCalendars(props) {
    const { dispatch, duration } = props;
    const { calendar, addCalendar } = useCalendar();

    if (!calendar) return;
    return (
        <Wrapper>
            <CalenderWrapper>
                <Calender>
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
                </Calender>
            </CalenderWrapper>
            <TimeRangePicker dispatch={dispatch} duration={duration} />
        </Wrapper>
    )
}

GridCalendars.propTypes = {
    dispatch: PropTypes.func,
    duration: PropTypes.array,
};