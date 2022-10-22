import styled from 'styled-components';

export const Button = styled.button`
    background: transparent;
    border: none;
    color: ${({theme}) => theme.colors.secondary};

    &:disabled {
        color: ${({theme}) => theme.colors.grey};
    }
`;