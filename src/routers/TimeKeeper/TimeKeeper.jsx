import { useState } from 'react';
import { Main } from '../../components';
import AllTimerList from './blocks/AllTimerList';
import Timer from './blocks/Timer';

export default function TimeKeeper() {
    const [currentShownTaskId, setCurrentShownTaskId] = useState('td4');

    function changeCurrentTaskId(newTaskId) {
        setCurrentShownTaskId(newTaskId);
    }

    return (
        <Main>
            <Timer currentShownTaskId={currentShownTaskId} />
            <AllTimerList
                currentShownTaskId={currentShownTaskId}
                changeCurrentTaskId={changeCurrentTaskId} />
        </Main>
    )
}