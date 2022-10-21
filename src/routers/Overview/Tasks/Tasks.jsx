import { useContext, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';

import { UserDataContext } from '../../../context/UserDataProvider';

import { ModalCreateTask } from '../../../blocks/Tasks';
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
    const { isOpen, onClose, currentProjectId } = useOutletContext();
    const { removeData, getProjectColorByTaskId, editData, startTimer, getTasksByProjectId } = useContext(UserDataContext);
    const tasks = useMemo(() => getTasksByProjectId(currentProjectId), [currentProjectId]);

    // TODO show "No tasks yet"
    return (
        <>
            <List>
                {
                    tasks.map(({ id, title }) => (
                        <ListItem
                            key={id}
                            values={{
                                title,
                                color: getProjectColorByTaskId(id),
                                log: false,
                            }}
                            separate
                            extra={
                                <Controller
                                    buttons={[{
                                        name: 'start',
                                        onClick: () => startTimer(id)
                                    }, {
                                        name: 'edit',
                                        onClick: () => editData(`/tasks/${id}`)
                                    }, {
                                        name: 'remove',
                                        onClick: () => removeData(`/tasks/${id}`)
                                    }]} />
                            } />
                    ))
                }
            </List>
            <Modal isOpen={isOpen} content={<ModalCreateTask onClose={onClose} />} />
        </>
    )
}