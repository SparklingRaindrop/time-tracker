import { useContext, useMemo, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom'
import { UserDataContext } from '../../context/UserDataProvider';
import useToggleModal from '../../hooks/useToggleModal';
import { FloatingButton, TabList, Tabs } from './styled';
import Tab from './Tab';

const TABS = ['projects', 'tasks'];

export default function Overview() {
    const location = useLocation();
    const { projects } = useContext(UserDataContext)
    const [currentProjectId, setCurrentProjectId] = useState(projects[0].id);
    const currentTab = useMemo(() => {
        const { pathname } = location;
        const pathNames = pathname.split('/');
        return pathNames[pathNames.length - 1];
    }, [location]);
    const { isOpen, onClose, onOpen } = useToggleModal();

    function updateCurrentProjectId(newId) {
        setCurrentProjectId(newId)
    }

    return (
        <Tabs $white={currentTab === 'projects'}>
            <TabList>
                {
                    TABS.map(tab => (
                        <Tab
                            key={tab}
                            path={tab}
                            label={tab}
                            white={tab === 'projects'}
                            current={currentTab === tab} />
                    ))
                }
            </TabList>
            <Outlet context={{ isOpen, onClose, currentProjectId, updateCurrentProjectId }} />
            <FloatingButton name='add' onClick={onOpen} />
        </Tabs>
    )
}