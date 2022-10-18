import { useLocation } from 'react-router-dom';
import { Wrapper } from './styled';

export default function TopBar() {
    const { pathname } = useLocation();
    // Adjust for calendar 
    if (pathname === '/') return;
    return (
        <Wrapper>
            {pathname.slice(1)}
        </Wrapper>
    )
}