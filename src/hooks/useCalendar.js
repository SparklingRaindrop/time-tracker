import calendar from 'calendar-js';
import {useState } from 'react';

// https://github.com/igor-ribeiro/calendar-js#readme


function getCalendar(year, monthIndex) {
    return calendar().of(year, monthIndex);
}

function init() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    // Pushing to the array here
    // to make sure that the order of the months is correct
    const initial = [];
    initial.push(getCalendar(currentYear, currentMonth - 1));
    initial.push(getCalendar(currentYear, currentMonth));
    initial.push(getCalendar(currentYear, currentMonth + 1));
    return initial;
}

export default function useCalendar() {
    const [calendar, setCalendar] = useState(init());

    function addCalendar(year, monthIndex) {
        const months = calendar.months();

        setCalendar(prev => {
            const newCalendar = [...prev];
            
            const newMonth = getCalendar(year, monthIndex);
            if (months.indexOf(newCalendar[0].month) < months.indexOf(newMonth.month)) {
                newCalendar.push();
            } else if (months.indexOf(newCalendar[0].month) > months.indexOf(newMonth.month)) {
                newCalendar.unshift();
            }
            return newCalendar;
        })
    }

    return {calendar, addCalendar};
}