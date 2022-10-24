export function compareDates(a, b) {
    return new Date(a) - new Date(b);
}

export function filterLogDataByDuration(duration, logArray) {
    if (!logArray.length) return [];
    const startDate = new Date(duration[0]);
    const endDate = duration[1] ? new Date(duration[1]) : new Date(duration[0]);
    // If duration has only one item then it's entire day
    // If time for end date is 00:00:00, consider that as whole day
    if(!duration[1] || (endDate.getHours() === 0 && endDate.getMinutes() === 0)) {
        endDate.setHours(23, 59, 59);
    }

    // Filter out logs whose start or end date is within duration
    return logArray.filter(({ start, end }) => {
        const logStartDate = new Date(start);
        const logEndDate = end && new Date(end);

        return (startDate <= logStartDate && logStartDate <= endDate) ||
        (startDate <= logEndDate && logEndDate <= endDate)
    });
}

export function isValid(date) {
    return date instanceof Date && !isNaN(date);
}

export function isSameDay(duration) {
    return (duration[0].getFullYear() === duration[1].getFullYear()) &&
    (duration[0].getMonth() === duration[1].getMonth()) &
    (duration[0].getDate() === duration[1].getDate())
}