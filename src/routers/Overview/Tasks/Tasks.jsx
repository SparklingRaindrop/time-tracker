import { useContext, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';

import { UserDataContext } from '../../../context/UserDataProvider';

import { Controller, ListItem, Modal } from '../../../components';
import { OverviewList } from '../../../blocks/Overview';
import { TaskListItem, TaskModal } from '../../../blocks/Tasks';
import { ContentWrapper, Title } from '../../../components/ListView';


/* 
    {
        color: 'red',
        title: 'Clean the office',
        log: '00:00:00',
        status: 'finished',
        id: '789'
    }
*/

export default function Tasks() {
    const { isOpen, currentProjectId, onOpen, } = useOutletContext();
    const {
        removeTask,
        getProjectColorByTaskId,
        startTimer,
        getTasksByProjectId,
        tasks,
    } = useContext(UserDataContext);
    const taskList = useMemo(() => getTasksByProjectId(currentProjectId), [currentProjectId, tasks]);

    return (
        <>
            <OverviewList>
                {
                    taskList.length > 0 ?
                        taskList.map(task => {
                            const { id, title } = task;
                            return (
                                <TaskListItem
                                    key={id}
                                    title={title}
                                    color={getProjectColorByTaskId(id)}
                                    controller={
                                        <Controller
                                            buttons={[{
                                                name: 'start',
                                                onClick: () => startTimer(id)
                                            }, {
                                                name: 'edit',
                                                onClick: () => onOpen(task)
                                            }, {
                                                name: 'remove',
                                                onClick: () => removeTask(id)
                                            }]} />
                                    } />
                            )
                        }) :
                        <ListItem><ContentWrapper><Title>No Task Yet</Title></ContentWrapper></ListItem>
                }
            </OverviewList>
            <Modal isOpen={isOpen} content={<TaskModal />} />
        </>
    )
}