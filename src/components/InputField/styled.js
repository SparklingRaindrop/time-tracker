import styled from 'styled-components';

export const InputField = styled.input`
    width: 100%;
    padding: 0.7em 1em;
    background: ${({theme}) => theme.colors.white};
    border: none;

    &:placeholder {
        text-transform: capitalize;
    }
`;