import { useReducer } from 'react';
import { GridCalendars, TimerList } from '../../blocks/Calendars';
import { Main } from '../../components';
import { durationReducer, generateInitialDurationDate } from '../../JS/calendar';

export default function Calendar() {
    const [duration, dispatch] = useReducer(durationReducer, generateInitialDurationDate())

    return (
        <Main>
            <GridCalendars dispatch={dispatch} duration={duration} />
            <TimerList duration={duration} />
        </Main>
    )
}