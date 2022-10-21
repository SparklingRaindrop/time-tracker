import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Wrapper } from './styled';

export default function TopBar() {
    const { pathname } = useLocation();
    const pageTitle = useMemo(() => {
        const pathList = pathname.split('/');
        return pathList[pathList.length - 1]
    }, [pathname]);

    if (pathname === '/') return;
    return (
        <Wrapper>
            {pageTitle}
        </Wrapper>
    )
}