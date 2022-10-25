import styled from 'styled-components';

export const Wrapper = styled.nav`
    width: 100%;
    min-height: 3rem;
    padding: 0.5rem 1rem;

    display: grid;

    box-shadow: 0px -4px 8px ${({theme}) => theme.colors.black10};
`;