import { useContext } from 'react';
import PropTypes from 'prop-types';

import { getStatus } from '../../../JS/dataParser';
import { UserDataContext } from '../../../context/UserDataProvider';

import { Controller } from '../../../components';
import { ListWrapper, ListItemWrapper } from './styled';

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
        tasks,
        getProjectColorByTaskId,
        stopTimer,
        removeData,
        logs,
        getTaskTitleByTaskId
    } = useContext(UserDataContext);

    function createButtonValues(isActive, logId) {
        const result = [];

        if (isActive) {
            result.push({
                name: 'stop',
                onClick: () => stopTimer(logId)
            });
        } else if (!isActive) {
            result.push({
                name: 'remove',
                onClick: () => removeData(`logs/${logId}`, logId)
            });
        }
        return result;
    }

    if (tasks.length === 0) return;
    // TODO Do something for if there is no timer to show
    return (
        <ListWrapper filled>
            {
                logs.map(({ id, start, end, isActive, task_id }) => {
                    if (!isActive && end) return;
                    return (
                        <ListItemWrapper
                            key={id}
                            current={id === currentShownLogId}
                            values={{
                                title: getTaskTitleByTaskId(task_id),
                                isActive,
                                color: getProjectColorByTaskId(task_id),
                                log: true,
                                start: start,
                                end: end,
                                status: getStatus(isActive, end)
                            }}
                            extra={
                                <Controller
                                    buttons={createButtonValues(isActive, id)}
                                    disabled={id !== currentShownLogId} />
                            }
                            onClick={() => changeCurrentLogId(id)} />
                    )
                })
            }
        </ListWrapper>
    )
}

AllTimerList.propTypes = {
    changeCurrentLogId: PropTypes.func,
    currentShownLogId: PropTypes.string,
};