import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ContentWrapper } from './styled';
import NavBar from './NavBar';
import TopBar from './TopBar';
import { useContext, useEffect } from 'react';
import { UserDataContext } from '../../context/UserDataProvider';

export default function Layout() {
    const { pathname } = useLocation();
    const { userId, getProjects } = useContext(UserDataContext);
    const navigate = useNavigate();

    useEffect(() => {

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