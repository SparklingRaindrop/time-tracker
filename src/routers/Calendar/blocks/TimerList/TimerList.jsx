import { useContext } from 'react';
import { UserDataContext } from '../../../../context/UserDataProvider';
import { ListWrapper, ListItemWrapper } from './styled';

/*
    color: 'red',
    title: 'Clean the office',
    start: Date
    end: Date
    log: true
 */
export default function TimerList() {
    const { tasks, logs, getProjectColor, getLogData } = useContext(UserDataContext);

    if (logs.length === 0) return;
    return (
        <ListWrapper filled>
            {
                tasks.map(({ project_id, title, id }) => {
                    const { start, end, isActive } = getLogData(id);
                    return <ListItemWrapper
                        key={id}
                        values={{
                            color: getProjectColor(project_id),
                            title,
                            isActive,
                            start: start,
                            end: end,
                            log: true
                        }} />
                })
            }
        </ListWrapper>
    )
}