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
    const endDate = duration[1] || new Date(duration[1]);
    // Filter out logs whose start or end date is within duration
    return logArray.filter(({ start, end }) => {
        const firstDate = new Date(start);
        const secondDate = new Date(end);

        return (startDate <= firstDate && firstDate <= endDate) ||
        (startDate <= secondDate && secondDate <= endDate)
    });
}
// TODO Things need to be adjusted later
// Be careful with what Date instance have
// it contains time nad if you don't care the time range you have to deal with that

export function isValid(date) {
    return date instanceof Date && !isNaN(date);
}