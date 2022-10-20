import { useContext } from 'react';
import { UserDataContext } from '../../../../context/UserDataProvider';
import { ListWrapper, ListItemWrapper } from './styled';
import { getStatus } from '../../../../JS/dataParser';

/*
    color: 'red',
    title: 'Clean the office',
    start: Date
    end: Date
    log: true
 */
export default function TimerList() {
    const { logs, getProjectColorByTaskId, getTaskTitleByTaskId } = useContext(UserDataContext);

    if (logs.length === 0) return;
    return (
        <ListWrapper filled>
            {
                logs.map(({ id, start, end, isActive, task_id }) => (
                    <ListItemWrapper
                        key={id}
                        values={{
                            color: getProjectColorByTaskId(task_id),
                            title: getTaskTitleByTaskId(task_id),
                            isActive,
                            start: start,
                            end: end,
                            log: true,
                            status: getStatus(isActive, end)
                        }} />
                ))
            }
        </ListWrapper>
    )
}