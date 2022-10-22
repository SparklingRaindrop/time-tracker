export function compareDates(a, b) {
    return new Date(a) - new Date(b);
}

export function generateInitialDurationDate() {
    const today = new Date();
    // I have to reset the time to get the initial day to be selected
    // Because Day component doesn't have time value
    // so it will be considered different when it's compared
    today.setHours(0, 0, 0, 0);
    return today;
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