import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100vw;
    height: 100%;
    padding: 0 1rem;

    overflow-y: auto;
    overflow-x: hidden;

    position: relative;

    background: ${({theme}) => theme.colors.primaryWhite};
`;