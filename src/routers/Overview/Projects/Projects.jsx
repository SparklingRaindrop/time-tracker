import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';

import { UserDataContext } from '../../../context/UserDataProvider';


import { Controller, ListItem, Modal } from '../../../components';
import { ListWrapper } from './styled';
import { ProjectModal } from '../../../blocks/Projects';

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
    const { currentProjectId, updateCurrentProjectId, onOpen, isOpen } = useOutletContext();
    const {
        projects,
        getTasksByProjectId,
        getActiveTasksByProjectId,
        removeData,
    } = useContext(UserDataContext);

    return (
        <>
            <ListWrapper>
                {
                    projects.map(project => {
                        const { id, name, color } = project;
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
                                        onClick: () => onOpen(project)
                                    }]} />} />
                        )
                    })
                }
            </ListWrapper>
            <Modal isOpen={isOpen} content={<ProjectModal />} />
        </>
    )
}
