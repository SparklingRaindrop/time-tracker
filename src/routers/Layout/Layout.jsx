import { Outlet, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { ContentWrapper } from './styled';
import NavBar from './NavBar';
import TopBar from './TopBar';
import { useContext, useEffect } from 'react';
import { UserDataContext } from '../../context/UserDataProvider';

export default function Layout() {
    const { pathname } = useLocation();
    const { userId, updateProjects } = useContext(UserDataContext);
    const navigate = useNavigate();
    const data = useLoaderData();

    useEffect(() => {
        if (!userId) {
            navigate('/');
            return;
        }
        updateProjects(data);
    }, [userId]);
    console.log(data)
    return (
        <ContentWrapper $noTopBar={pathname === '/'}>
            <TopBar />
            <Outlet />
            <NavBar />
        </ContentWrapper>
    )
}