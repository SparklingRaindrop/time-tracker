import styled from 'styled-components';

export const Wrapper = styled.button`
    padding: 1.1em 1em;
    background-color: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.primaryWhite};
    border-radius: calc(1.2rem + (0.5em * 2));
`;