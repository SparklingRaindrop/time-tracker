import styled from 'styled-components';

export const Wrapper =  styled.li`
    width: 100%;
    border: none;
`;

export const TabLink =  styled.button`
    width: 100%;
    height: 4rem;
    border: none;
    background: ${({theme, $white}) => $white ? theme.colors.primaryWhite : theme.colors.highlight};
    text-transform: capitalize;
    color: ${({$current, theme}) => !$current && theme.colors.grey};
`;