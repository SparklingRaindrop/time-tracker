import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';

import { UserDataContext } from '../../../context/UserDataProvider';

import { Controller, ListItem } from '../../../components';
import { ProjectModal } from '../../../blocks/Projects';
import ListView from '../../../blocks/Overview';

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
        <ListView ModalContent={ProjectModal} isOpen={isOpen}>
            {
                projects.length > 0 ?
                    projects.map(project => {
                        const { id, name, color } = project;
                        return (
                            <ListItem
                                key={id}
                                current={id === currentProjectId}
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
                    }) :
                    <ListItem values={{ title: 'No project yet' }} />
            }
        </ListView>
    )
}
