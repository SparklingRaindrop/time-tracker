import { useMemo } from 'react';
import PropTypes from 'prop-types';

import { isSameDay } from '../../../../JS/date';

import { Option } from '../../../../components';
import { Wrapper } from './styled';

export default function TimeRangePicker(props) {
    const { duration, dispatch } = props;
    const inputValue = useMemo(() => {
        return (
            {
                start: [duration[0].getHours(), duration[0].getMinutes()],
                end: [duration[1].getHours(), duration[1].getMinutes()],
            }
        )
    }, [duration]);
    const isOneDay = useMemo(() => {
        return isSameDay(duration);
    }, [duration])

    function handleOnChange({ target }) {
        const targetName = target.name;
        const targetId = target.id;
        const userInput = target.value;
        const isHours = targetId.includes('hours');

        const newHour = isHours ? userInput : inputValue[targetName][0];
        const newMin = !isHours ? userInput : inputValue[targetName][1];
        const newTime = {
            [targetName]: [newHour, newMin],
        }

        dispatch({
            type: 'time',
            value: newTime
        });
    }

    return (
        <Wrapper>
            <div>
                <label htmlFor='start'>From: </label>
                <select name='start' id='start-hours' onChange={handleOnChange} value={inputValue.start[0]}>
                    {
                        [...Array(23).keys()].map(hour => (
                            <Option key={hour} value={hour} />
                        ))
                    }
                </select>
                <select name='start' id='start-min' onChange={handleOnChange} value={inputValue.start[1]}>
                    {
                        [0, 15, 30, 45].map(minutes => (
                            <Option
                                key={minutes}
                                value={minutes} />
                        ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor='end'>Until: </label>
                <select name='end' id='end-hours' onChange={handleOnChange} value={inputValue.end[0]}>
                    {
                        [...Array(24).keys()].map(hour => (
                            <Option
                                key={hour}
                                value={hour}
                                disabled={isOneDay && hour < inputValue.start[0]} />
                        ))
                    }
                </select>
                <select name='end' id='end-min' onChange={handleOnChange} value={inputValue.end[1]}>
                    {
                        [0, 15, 30, 45, 59].map(minutes => (
                            <Option
                                key={minutes}
                                value={minutes}
                                disabled={isOneDay && inputValue.start[0] === inputValue.end[0] && minutes <= inputValue.end[1]} />
                        ))
                    }
                </select>
            </div>
        </Wrapper>
    )
}

TimeRangePicker.propTypes = {
    dispatch: PropTypes.func,
    duration: PropTypes.array,
};