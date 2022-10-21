import { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styled';

export default function TimeRangePicker(props) {
    const { duration, dispatch } = props;
    const [inputValue, setInputValue] = useState({
        start: '',
        end: ''
    });

    function handleOnChange(event) {
        setInputValue(prev => ({
            ...prev,
            [event.target.id]: event.target.value
        }));
        dispatch({
            type: 'time',
            value: inputValue
        })
    }
    console.log(duration)
    return (
        <Wrapper>
            <div>
                <label htmlFor='start'>From: </label>
                <input
                    id='start'
                    type='time'
                    min='00:00'
                    max='24:00'
                    value={inputValue.start}
                    pattern='[0-9]{2}:[0-9]{2}'
                    onChange={handleOnChange} />
            </div>
            <div>
                <label htmlFor='end'>Until: </label>
                <input
                    id='end'
                    type='time'
                    min='00:00'
                    max='24:00'
                    value={inputValue.end}
                    pattern='[0-9]{2}:[0-9]{2}'
                    onChange={handleOnChange} />
            </div>
        </Wrapper>
    )
}

TimeRangePicker.propTypes = {
    dispatch: PropTypes.func,
    duration: PropTypes.array,
};