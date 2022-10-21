import { useReducer } from 'react';
import { GridCalendars, TimerList } from '../../blocks/Calendars';
import { Main } from '../../components';
import { generateInitialDurationDate } from '../../JS/date';
import { durationReducer } from '../../JS/calendar';

export default function Calendar() {
    const [duration, dispatch] = useReducer(durationReducer, [generateInitialDurationDate()])
    console.log(duration)
    return (
        <Main>
            <GridCalendars dispatch={dispatch} duration={duration} />
            <TimerList duration={duration} />
        </Main>
    )
}