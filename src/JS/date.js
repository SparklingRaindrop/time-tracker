export function compareDates(a, b) {
    return new Date(a) - new Date(b);
}

/* export function truncate(dateArray, newDate) {
    const result = [...dateArray];
    const position = dateArray.map(Number).indexOf(Number(newDate));
    if (position === 0 || position === 2) {
        // (newDate) (old) (old) => Delete the second value
        // (old) (old) (newDate) => Delete the last value
        result.splice(1, 1);
    } else if (position === 1) {
        // (old) (newDate) (old) => Delete the first value
        result.splice(0, 1);
    }
    return result;
} */

export function filterDateByDuration(duration, logArray) {
    if (!logArray.length) return [];

    const startDate = new Date(duration[0]);
    const endDate = duration[1] || new Date(duration[1]);
    // Filter out logs whose start or end date is within duration
    return logArray.filter(({ start, end }) => {
        const firstDate = new Date(start);
        const secondDate = new Date(end);

        return (startDate < firstDate && firstDate < endDate) ||
        (startDate < secondDate && secondDate < endDate)
    });
}