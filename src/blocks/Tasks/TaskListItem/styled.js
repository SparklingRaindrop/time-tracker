import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.sm};
    
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({theme}) => theme.spacing.sm};
`;