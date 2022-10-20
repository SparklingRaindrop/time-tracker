import { useContext, useState } from 'react';
import { Main } from '../../components';
import { UserDataContext } from '../../context/UserDataProvider';
import AllTimerList from './blocks/AllTimerList';
import Timer from './blocks/Timer';

export default function TimeKeeper() {
    const { logs } = useContext(UserDataContext);
    const [currentShownLogId, setCurrentShownLogId] = useState(logs.find(({ start, isActive }) => !start || isActive)?.id || null);

    function changeCurrentLogId(newLogId) {
        setCurrentShownLogId(newLogId);
    }

    return (
        <Main>
            <Timer currentShownLogId={currentShownLogId} />
            <AllTimerList
                currentShownLogId={currentShownLogId}
                changeCurrentLogId={changeCurrentLogId} />
        </Main>
    )
}