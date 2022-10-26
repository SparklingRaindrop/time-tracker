import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';

import { UserDataContext } from '../../../context/UserDataProvider';

import { Controller, ListItem, Modal } from '../../../components';
import { ProjectListItem, ProjectModal } from '../../../blocks/Projects';
import { OverviewList } from '../../../blocks/Overview';

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
        removeProject,
    } = useContext(UserDataContext);

    return (
        <>
            <OverviewList>
                {
                    projects.length > 0 ?
                        projects.map(project => {
                            const { id, name, color } = project;
                            return (
                                <ProjectListItem
                                    key={id}
                                    current={id === currentProjectId}
                                    title={name}
                                    color={color}
                                    taskTotal={String(getTasksByProjectId(id).length)}
                                    onGoingTotal={String(getActiveTasksByProjectId(id).length)}
                                    onClick={() => updateCurrentProjectId(id)}
                                    controller={
                                        <Controller
                                            id={id}
                                            buttons={[{
                                                name: 'remove',
                                                onClick: () => removeProject(id)
                                            }, {
                                                name: 'edit',
                                                onClick: () => onOpen(project)
                                            }]} />
                                    } />
                            )
                        }) :
                        <ListItem values={{ title: 'No project yet' }} />
                }
            </OverviewList>
            <Modal isOpen={isOpen} content={<ProjectModal />} />
        </>
    )
}
