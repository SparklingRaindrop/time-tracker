// value for date is Date instance object without specific time

import { compareDates, isSameDay } from './date';

export function generateInitialDurationDate(date) {
    const start = date ? new Date(date) : new Date();
    const end = date ? new Date(date) :  new Date();
    // I have to reset the time to get the initial day to be selected
    // Because Day component doesn't have time value
    // so it will be considered different when it's compared
    start.setHours(0, 0, 0);
    end.setHours(23, 59, 59);
    return [start, end];
}

// value for time is {start '00:00', end '00:00' }
export function durationReducer(state, { type, value }) {
    const newDuration = [...state];

    if (type === 'date') {
        const start = new Date(state[0]);
        const end = new Date(state[1]);
        const newDate = new Date(value);

        // Reset on the third day clicked.
        const isRange = !isSameDay(state)
        if (isRange) {
            return generateInitialDurationDate(value);
        }

        let hour;
        let minutes;
        // If newDate is before start
        if (compareDates(newDate, start) < 0) {
            //take over time from start
            hour = start.getHours();
            minutes = start.getMinutes();
            // Remove start
            newDuration.splice(0, 1);
        } else if (compareDates(newDate, end) > 0) {
            // take over time from end
            hour = end.getHours();
            minutes = end.getMinutes();
            // Remove end
            newDuration.splice(1, 1);
        } else {
            console.error('Check!')
        }
        newDate.setHours(hour, minutes);
        newDuration.push(newDate);
        


    } else if (type === 'time') {
        const { start, end } = value;

        const target = Object.keys(value)[0];
        const targetIndex = target === 'start' ? 0 : 1;

        const newStartDate = new Date(state[targetIndex]);
        const [newHour, newMin] = start ? start : end;
        newStartDate.setHours(newHour, newMin);

        newDuration.splice(targetIndex, 1);
        newDuration.push(newStartDate);
    }

    newDuration.sort(compareDates);
    return newDuration;
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
