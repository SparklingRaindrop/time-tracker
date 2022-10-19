import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height:0;
    position: relative;
    padding-bottom: 100%;

    border: 1px solid ${({theme}) => theme.colors.highlight};
    border-radius: 0.2rem;
    background: none;

    &:before {
        content: '${({$day}) => $day}';
        position: absolute;
        top: 50%;
        left: 50%;
        bottom: 0;
        right: 0;
    }
`;