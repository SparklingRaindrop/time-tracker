import { useState } from 'react';
import { GridCalendars, TimerList } from '../../blocks/Calendars';
import { Main } from '../../components';
import { compareDates, generateInitialDurationDate } from '../../JS/date';


export default function Calendar() {
    const [duration, setDuration] = useState([generateInitialDurationDate()]);

    function updateDuration(newDate) {
        setDuration(prev => {
            const newDuration = [...prev, newDate];
            newDuration.sort(compareDates);
            if (newDuration.length < 3) return newDuration;
            // When the old duration is selected reset on the third day clicked.
            return [newDate];
        });
    }

    return (
        <Main>
            <GridCalendars updateDuration={updateDuration} duration={duration} />
            <TimerList duration={duration} />
        </Main>
    )
}