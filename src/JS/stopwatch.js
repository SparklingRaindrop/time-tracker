export function getDuration(start, end) {
    if (!start || !end) {
        return {
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    const startDate = new Date(start);
    const endDate   = new Date(end);
    const difference = endDate.getTime() - startDate.getTime();

    let milliseconds = difference;
    const hours = Math.floor(milliseconds / 1000 / 60 / 60);
    milliseconds -= hours * 1000 * 60 * 60;

    const minutes = Math.floor(milliseconds / 1000 / 60);
    milliseconds -= minutes * 1000 * 60;

    const seconds = Math.floor(milliseconds / 1000);
    milliseconds -= seconds * 1000;
    
    return {hours, minutes, seconds}
}