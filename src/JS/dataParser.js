export function getStatus(isActive, end) {
        if (isActive) {
            return 'on going';
        } else if (!isActive && !end) {
            return 'pending';
        } else if (!isActive && end) {
            return 'finished';
        }
}