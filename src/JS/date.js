export function compareDates(a, b) {
    return new Date(a) - new Date(b);
}

export function filterLogDataByDuration(duration, logArray) {
    if (!logArray.length) return [];

    const startDate = new Date(duration[0]);
    const endDate = new Date(duration[1]);

    // Filter out logs whose start or end date is within duration
    return logArray.filter(({ start, end }) => {
        const logStartDate = new Date(start);
        const logEndDate = end && new Date(end);

        return (startDate <= logStartDate && logStartDate <= endDate) || // It started within
        (startDate <= logEndDate && logEndDate <= endDate) || // It finished within
        (!(startDate < logStartDate) && endDate <= logEndDate) // It was active during
    });
}

export function isValid(date) {
    return date instanceof Date && !isNaN(date);
}

export function isSameDay(duration) {
    return (duration[0].getFullYear() === duration[1].getFullYear()) &&
    (duration[0].getMonth() === duration[1].getMonth()) &&
    (duration[0].getDate() === duration[1].getDate())
}