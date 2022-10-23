import styled from 'styled-components';

export const Wrapper = styled.li`
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: row;
    background: ${({theme, $current}) => $current ? theme.colors.highlight : theme.colors.white};
    border-radius: 0.2rem;
    ${({$separate}) => $separate && 'margin: 0.5rem 0;'};
`;