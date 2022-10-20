import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ContentWrapper } from './styled';
import NavBar from './NavBar';
import TopBar from './TopBar';
import { useContext, useEffect } from 'react';
import { UserDataContext } from '../../context/UserDataProvider';

export default function Layout() {
    const { pathname } = useLocation();
    const { userId, fetchProjects, setProjects } = useContext(UserDataContext);
    const navigate = useNavigate();

    useEffect(() => {
        async function getProjects() {
            const { status, data } = await fetchProjects(userId);
            if (status === 200) {
                setProjects(data);
            }
        }

        if (!userId) {
            navigate('/');
            return;
        }
        getProjects();
    }, [userId]);

    return (
        <ContentWrapper $noTopBar={pathname === '/'}>
            <TopBar />
            <Outlet />
            <NavBar />
        </ContentWrapper>
    )
}