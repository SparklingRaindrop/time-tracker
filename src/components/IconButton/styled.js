import styled from 'styled-components';

export const Button = styled.button`
    background: transparent;
    border: none;
    color: ${({theme}) => theme.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
        color: ${({theme}) => theme.colors.grey};
    }
`;