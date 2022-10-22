import { useMemo } from 'react';
import PropTypes from 'prop-types';

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
                    <option value='0'>00</option>
                    <option value='1'>01</option>
                    <option value='2'>02</option>
                    <option value='3'>03</option>
                    <option value='4'>04</option>
                    <option value='5'>05</option>
                    <option value='6'>06</option>
                    <option value='7'>07</option>
                    <option value='8'>08</option>
                    <option value='9'>09</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                    <option value='16'>16</option>
                    <option value='17'>17</option>
                    <option value='18'>18</option>
                    <option value='19'>19</option>
                    <option value='20'>20</option>
                    <option value='21'>21</option>
                    <option value='22'>22</option>
                    <option value='23'>23</option>
                </select>
                <select name='start' id='start-min' onChange={handleOnChange} value={inputValue.start[1]}>
                    <option value='0'>00</option>
                    <option value='15'>15</option>
                    <option value='30'>30</option>
                    <option value='45'>45</option>
                </select>
            </div>
            <div>
                <label htmlFor='end'>Until: </label>
                <select name='end' id='end-hours' onChange={handleOnChange} value={inputValue.end[0]}>
                    <option value='0'>00</option>
                    <option value='1'>01</option>
                    <option value='2'>02</option>
                    <option value='3'>03</option>
                    <option value='4'>04</option>
                    <option value='5'>05</option>
                    <option value='6'>06</option>
                    <option value='7'>07</option>
                    <option value='8'>08</option>
                    <option value='9'>09</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                    <option value='16'>16</option>
                    <option value='17'>17</option>
                    <option value='18'>18</option>
                    <option value='19'>19</option>
                    <option value='20'>20</option>
                    <option value='21'>21</option>
                    <option value='22'>22</option>
                    <option value='23'>23</option>
                </select>
                <select name='end' id='end-min' onChange={handleOnChange} value={inputValue.end[1]}>
                    <option value='0'>00</option>
                    <option value='15'>15</option>
                    <option value='30'>30</option>
                    <option value='45'>45</option>
                    <option value='59'>59</option>
                </select>
            </div>
        </Wrapper>
    )
}

TimeRangePicker.propTypes = {
    dispatch: PropTypes.func,
    duration: PropTypes.array,
};