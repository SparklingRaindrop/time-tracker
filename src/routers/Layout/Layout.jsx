import { Outlet } from 'react-router-dom';
import { ContentWrapper } from './styled';
import NavBar from './NavBar';
import TopBar from './TopBar';

export default function Layout() {
    return (
        <ContentWrapper>
            <TopBar />
            <Outlet />
            <NavBar />
        </ContentWrapper>
    )
}