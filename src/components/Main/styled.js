import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100vw;
    height: 100%;

    overflow: hidden;

    position: relative;

    background: ${({theme}) => theme.colors.primaryWhite};
`;