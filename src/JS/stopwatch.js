export function getDuration(start, end) {
    if (!start && !end) {
        return {
            hour: 0,
            minute: 0,
            second: 0,
        }
    }
    const startDate = new Date(start);
    const endDate   = end ? new Date(end) : new Date();
    const difference = endDate.getTime() - startDate.getTime();

    let milliseconds = difference;
    var hour = Math.floor(milliseconds / 1000 / 60 / 60);
    milliseconds -= hour * 1000 * 60 * 60;
    var minute = Math.floor(milliseconds / 1000 / 60);
    milliseconds -= minute * 1000 * 60;
    var second = Math.floor(milliseconds / 1000);
    milliseconds -= second * 1000;
    return {hour, minute, second}
}

export function getDoubleDigit(number) {
    return number.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })
}