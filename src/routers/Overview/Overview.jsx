import { useContext, useMemo, useState } from 'react';
import { Outlet, useLocation, useOutletContext } from 'react-router-dom'

import { UserDataContext } from '../../context/UserDataProvider';
import useToggleModal from '../../hooks/useToggleModal';

import { Tab } from '../../components';
import { FloatingButton, TabList, Tabs } from './styled';


const TABS = ['projects', 'tasks'];

export default function Overview() {
    const location = useLocation();
    const { projects } = useContext(UserDataContext);
    const { navbarRef } = useOutletContext();
    const [currentProjectId, setCurrentProjectId] = useState(projects[0].id);
    const currentTab = useMemo(() => {
        const { pathname } = location;
        const pathNames = pathname.split('/');
        return pathNames[pathNames.length - 1];
    }, [location]);
    const navbarHeight = useMemo(() => navbarRef.current && navbarRef.current.clientHeight, [navbarRef])
    const { isOpen, onClose, onOpen, data } = useToggleModal();

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
            <Outlet context={{ isOpen, onClose, onOpen, currentProjectId, updateCurrentProjectId, data }} />
            <FloatingButton name='add' onClick={() => onOpen()} $navbarHeight={navbarHeight} />
        </Tabs>
    )
}