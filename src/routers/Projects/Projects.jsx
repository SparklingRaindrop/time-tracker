import { List, ListItem } from '../../components';
import { Controller } from '../../blocks';
import { Modal } from '../../blocks';
import ModalCreateProject from './ModalCreateProject';
import { useOutletContext } from 'react-router-dom';
import { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataProvider';

/* 
    {
        color: 'red',
        title: 'Project 1',
        id: 1,
        taskTotal: 12,
        onGoingTotal: 8
    }
*/

export default function Projects() {
    const { isOpen, onClose, currentProjectId, updateCurrentProjectId } = useOutletContext();
    const {
        projects,
        getTasksByProjectId,
        getActiveTasksByProjectId,
        removeData,
        editData
    } = useContext(UserDataContext);

    return (
        <>
            <List>
                {
                    projects.map(({ id, name, color }) => {
                        return (
                            <ListItem
                                key={id}
                                current={id === currentProjectId}
                                separate
                                values={{
                                    title: name,
                                    color: color,
                                    taskTotal: String(getTasksByProjectId(id).length),
                                    onGoingTotal: String(getActiveTasksByProjectId(id).length),
                                }}
                                onClick={() => updateCurrentProjectId(id)}
                                extra={<Controller
                                    id={id}
                                    buttons={[{
                                        name: 'remove',
                                        onClick: () => removeData(`/projects/${id}`)
                                    }, {
                                        name: 'edit',
                                        onClick: () => editData(`/projects/${id}`)
                                    }]} />} />
                        )
                    })
                }
            </List>
            <Modal isOpen={isOpen} content={<ModalCreateProject onClose={onClose} />} />
        </>
    )
}