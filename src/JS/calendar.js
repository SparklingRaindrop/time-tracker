// value for date is Date instance object without specific time

import { compareDates } from './date';

// value for time is {start '00:00', end '00:00' }
export function durationReducer(state, { type, value }) {
    if (type === 'date') {
        const newDuration = [...state, value];
        // Reset on the third day clicked.
        if (newDuration.length === 3) return [value];

        newDuration.sort(compareDates);
        return newDuration;

    } else if (type === 'time') {
        const { start, end } = value;
        const [startHour, startMinutes] = start.split(':');
        const [endHour, endMinutes] = end.split(':');
        const newStartDate = new Date(state[0]);
        newStartDate.setHours(startHour, startMinutes);
        const newEndDate = state.length === 1 ? new Date(state[0]) : new Date(state[1]);
        newEndDate.setHours(endHour, endMinutes);
        return [newStartDate, newEndDate];
    }
}

    // const [duration, setDuration] = useState([generateInitialDurationDate()]);

    /*     function updateDuration(newDate) {
            setDuration(prev => {
                const newDuration = [...prev, newDate];
                newDuration.sort(compareDates);
                if (newDuration.length < 3) return newDuration;
                // When the old duration is selected reset on the third day clicked.
                return [newDate];
            });
        } */
