import { useContext } from 'react';
import PropTypes from 'prop-types';

import { UserDataContext } from '../../../context/UserDataProvider';

import { Controller, ListItem } from '../../../components';
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
        getProjectColorByTaskId,
        stopTimer,
        logs,
        getTaskTitleByTaskId
    } = useContext(UserDataContext);

    return (
        <ListWrapper filled round>
            {
                logs.length > 0 ?
                    logs.map(({ id, start, end, isActive, task_id }) => {
                        if (!isActive) return;
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
                                }}
                                extra={
                                    <Controller
                                        buttons={[{
                                            name: 'stop',
                                            onClick: () => stopTimer(id)
                                        }]}
                                        disabled={id !== currentShownLogId} />
                                }
                                onClick={() => changeCurrentLogId(id)} />
                        )
                    }) :
                    <ListItem values={{ title: 'No active timer found' }} />
            }
        </ListWrapper>
    )
}

AllTimerList.propTypes = {
    changeCurrentLogId: PropTypes.func,
    currentShownLogId: PropTypes.string,
};