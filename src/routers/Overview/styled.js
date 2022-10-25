import styled from 'styled-components';
import { Main } from '../../components';
import { IconButton } from '../../components';

export const Tabs = styled(Main)`
    background: ${({theme, $white}) => $white ? theme.colors.primaryWhite : theme.colors.highlight};
`;

export const TabList = styled.ul`
    background: ${({theme}) => theme.colors.highlight};
    list-style-type: none;

    padding-left: 0;
    display: flex;
    flex-direction: row;
`;

export const FloatingButton = styled(IconButton)`
    position: fixed;
    bottom: ${({$navbarHeight}) => `calc(${$navbarHeight}px + 1rem)`};
    left: 50%;
    transform: translateX(-50%);

    & svg {
        width: 5rem;
        height: 5rem;
    }
`;