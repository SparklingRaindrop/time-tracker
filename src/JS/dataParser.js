export function getStatus(isActive, end) {
        if (isActive) {
            return 'on going';
        } else if (!isActive && !end) {
            return 'pending';
        } else if (!isActive && end) {
            return 'finished';
        }
}

export function getDayStatus(date, duration) {
    const convertedDate = Number(date);
        const convertedDuration = duration.map(Number);
        if (convertedDuration.includes(convertedDate)) {
            return 'selected';
        } else if (
            convertedDuration[0] < convertedDate &&
            convertedDate < convertedDuration[1]
        ) {
            return 'within'
        }
        return 'normal';
}