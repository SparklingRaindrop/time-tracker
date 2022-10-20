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
    const { projects, tasks, logs } = useContext(UserDataContext);

    if (logs.length === 0) return;
    return (
        <ListWrapper filled>
            {
                tasks.map(({ project_id, title, id }) => {
                    const parentProject = projects.find(p => p.id === project_id);
                    const { start, end } = logs.find(l => l.task_id === id);

                    return <ListItemWrapper
                        key={id}
                        values={{
                            color: parentProject.color,
                            title: title,
                            start: start,
                            end: end,
                            log: true
                        }} />
                })
            }
        </ListWrapper>
    )
}