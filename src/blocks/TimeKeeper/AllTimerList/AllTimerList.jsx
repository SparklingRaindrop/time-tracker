import { useContext } from 'react';
import PropTypes from 'prop-types';

import { UserDataContext } from '../../../context/UserDataProvider';

import { Controller, ListItem } from '../../../components';
import { ListWrapper } from './styled';
import AllTimerListItem from './AllTimerListItem';
import { ContentWrapper, Title } from '../../../components/ListView';

/* 
    {
        color: 'red',
        title: 'Clean the office',
        log: true,
        start: Date
        end: Date
    }
*/

export default function AllTimerList(props) {
    const { changeCurrentLogId, currentShownLogId } = props;
    const {
        getProjectColorByTaskId,
        stopTimer,
        logs,
        getTaskTitleByTaskId
    } = useContext(UserDataContext);

    async function handleStopTimer(id) {
        await stopTimer(id);
        const nextLog = logs.find(({ isActive }) => isActive);
        changeCurrentLogId(nextLog ? nextLog.id : null);
    }

    return (
        <ListWrapper filled round>
            {
                logs.length > 0 ?
                    logs.map(({ id, start, end, isActive, task_id }) => {
                        if (!isActive) return;
                        return (
                            <AllTimerListItem
                                key={id}
                                current={id === currentShownLogId}
                                title={getTaskTitleByTaskId(task_id)}
                                color={getProjectColorByTaskId(task_id)}
                                start={start}
                                end={end}
                                onClick={() => changeCurrentLogId(id)}
                                controller={
                                    <Controller
                                        buttons={[{
                                            name: 'stop',
                                            onClick: () => handleStopTimer(id)
                                        }]}
                                        disabled={id !== currentShownLogId} />
                                } />
                        )
                    }) :
                    <ListItem><ContentWrapper><Title>No active timer found</Title></ContentWrapper></ListItem>
            }
        </ListWrapper>
    )
}

AllTimerList.propTypes = {
    changeCurrentLogId: PropTypes.func,
    currentShownLogId: PropTypes.string,
};