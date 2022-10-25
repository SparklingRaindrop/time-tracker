import { useContext, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';

import { UserDataContext } from '../../../context/UserDataProvider';

import { TaskModal } from '../../../blocks/Tasks';
import { Controller, List, ListItem, Modal } from '../../../components';


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
        removeData,
        getProjectColorByTaskId,
        startTimer,
        getTasksByProjectId
    } = useContext(UserDataContext);
    const taskList = useMemo(() => getTasksByProjectId(currentProjectId), [currentProjectId]);

    return (
        <>
            <List separate>
                {
                    taskList.length > 0 ?
                        taskList.map(task => {
                            const { id, title } = task;
                            return (
                                <ListItem
                                    key={id}
                                    values={{
                                        title,
                                        color: getProjectColorByTaskId(id),
                                        log: false,
                                    }}
                                    extra={
                                        <Controller
                                            buttons={[{
                                                name: 'start',
                                                onClick: () => startTimer(id)
                                            }, {
                                                name: 'edit',
                                                onClick: () => onOpen(task)
                                            }, {
                                                name: 'remove',
                                                onClick: () => removeData(`/tasks/${id}`)
                                            }]} />
                                    } />
                            )
                        }) :
                        <ListItem values={{ title: 'No project yet' }} />
                }
            </List>
            <Modal isOpen={isOpen} content={<TaskModal />} />
        </>
    )
}