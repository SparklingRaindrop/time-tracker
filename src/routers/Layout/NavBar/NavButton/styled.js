import styled from 'styled-components';

export const Wrapper = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;

    border: none;
    background: none;

    color: ${({theme, $current}) => $current ? theme.colors.primary : theme.colors.grey};
    
    & svg {
        color: ${({theme, $current}) => $current ? theme.colors.primary : theme.colors.grey};
    }
`;

export const Title = styled.div`
    font-size: 0.8em;
`;