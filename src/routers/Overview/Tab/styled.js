import styled from 'styled-components';

export const Wrapper =  styled.li`
    width: 100%;
    border: none;
    background: ${({theme}) => theme.colors.highlight};
`;

export const TabLink =  styled.button`
    width: 100%;
    height: 4rem;
    border: none;
    background: ${({theme, $current}) => $current ? theme.colors.highlight : theme.colors.primaryWhite};
    text-transform: capitalize;
`;