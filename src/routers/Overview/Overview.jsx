import { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom'
import useToggleModal from '../../hooks/useToggleModal';
import { FloatingButton, TabList, Tabs } from './styled';
import Tab from './Tab';

const TABS = ['projects', 'tasks'];

export default function Overview() {
    const location = useLocation();
    const currentTab = useMemo(() => {
        const { pathname } = location;
        const pathNames = pathname.split('/');
        return pathNames[pathNames.length - 1];
    }, [location]);
    const { isOpen, onClose, onOpen } = useToggleModal();

    return (
        <Tabs>
            <TabList>
                {
                    TABS.map(tab => (
                        <Tab
                            key={tab}
                            path={tab}
                            label={tab}
                            current={currentTab === tab} />
                    ))
                }
            </TabList>
            <Outlet context={{ isOpen, onClose }} />
            <FloatingButton name='add' onClick={onOpen} />
        </Tabs>
    )
}