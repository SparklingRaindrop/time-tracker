import calendar from 'calendar-js';
import {useState} from 'react';

// https://github.com/igor-ribeiro/calendar-js#readme


function getCalendar(year) {
    const result = [];
    [...Array(12).keys()].forEach(month => result.push(calendar().of(year, month)));
    return  result;
}

function init() {
    const today = new Date();
    const currentYear = today.getFullYear();

    // Pushing to the array here
    // to make sure that the order of the months is correct
    
    return getCalendar(currentYear);
}

export default function useCalendar() {
    const [calendarData, setCalendarData] = useState(init());

    function addCalendar(direction) {
        const targetYear = Number(calendarData[direction < 0 ? 0 : calendarData.length - 1].year) + direction;
        const newCalender = getCalendar(targetYear);
        setCalendarData(prev => direction < 0 ? [...newCalender, ...prev] : [...prev, ...newCalender]);
    }

    return {calendar: calendarData, addCalendar};
}