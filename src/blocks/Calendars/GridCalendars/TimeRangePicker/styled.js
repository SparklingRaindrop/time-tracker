import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: ${({theme}) => theme.spacing.sm};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;