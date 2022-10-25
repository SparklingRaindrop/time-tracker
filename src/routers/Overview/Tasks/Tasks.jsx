import { useContext, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';

import { UserDataContext } from '../../../context/UserDataProvider';

import { Controller, ListItem, Modal } from '../../../components';
import { ListView } from '../../../blocks/Overview';
import { TaskModal } from '../../../blocks/Tasks';


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
            <ListView>
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
            </ListView>
            <Modal isOpen={isOpen} content={<TaskModal />} />
        </>
    )
}