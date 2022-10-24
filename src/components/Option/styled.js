import styled from 'styled-components';

export const Wrapper = styled.option`
    &:disabled {
        background: ${({theme}) => theme.colors.black10};
        color: ${({theme}) => theme.colors.grey20};
    }
`;