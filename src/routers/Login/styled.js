import styled from 'styled-components';
import { Main } from '../../components';

export const Container = styled(Main)`
    width: 100vw;
    height: 100vh;

    display: grid;
    place-content: center;
    gap: ${({theme}) => theme.spacing.md};

    background: ${({theme}) => theme.colors.highlight};
`