import { useContext, useEffect, useRef } from 'react';
import { Outlet, useLoaderData, useLocation, useNavigate } from 'react-router-dom';

import { UserDataContext } from '../../context/UserDataProvider';

import { TopBar, NavBar } from '../../blocks/Layout';
import { ContentWrapper, Wrapper } from './styled';

export default function Layout() {
    const { pathname } = useLocation();
    const { userId, updateProjects } = useContext(UserDataContext);
    const navRef = useRef(null);
    const navigate = useNavigate();
    const data = useLoaderData();

    useEffect(() => {
        if (!userId) {
            navigate('/');
            return;
        }
        updateProjects(data);
    }, [userId]);

    return (
        <Wrapper>
            <ContentWrapper $noTopBar={pathname === '/'} $navbarHeight={navRef.current && navRef.current.clientHeight}>
                <TopBar />
                <Outlet context={{ navbarRef: navRef }} />
            </ContentWrapper>
            <NavBar ref={navRef} />
        </Wrapper>
    )
}