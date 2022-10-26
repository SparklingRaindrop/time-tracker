import { isValid } from './date';

export function getStatus(isActive) {
        if (isActive) {
            return 'ongoing';
        } else if (!isActive) {
            return 'finished';
        }
}

export function getDayStatus(targetDate, duration) {
    if (!isValid(targetDate)) return;
    const startDate = new Date(duration[0]);
    const endDate = new Date(duration[1]);

    // Resetting: Don't care about time, check just the day is within or not
    startDate.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);
    endDate && endDate.setHours(0, 0, 0, 0);

    const [start, end, target] = [startDate, endDate, targetDate].map(date => ({
        year: date && date.getFullYear(),
        month: date && date.getMonth(),
        day: date && date.getDate()
    }));

    if ((start.year === target.year && start.month === target.month && start.day === target.day) ||
    (end.year === target.year && end.month === target.month && end.day === target.day)) {
        return 'selected';
    } else if ( (start.year <= target.year && start.month <= target.month && start.day < target.day) &&
    (end.year >= target.year && end.month >= target.month && end.day > target.day)) {
        return 'within'
    }
    return 'normal';
}

export function getDoubleDigit(number) {
    return number.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })
}