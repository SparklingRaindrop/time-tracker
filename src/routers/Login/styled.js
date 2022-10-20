import styled from 'styled-components';
import { Main } from '../../components';

export const Container = styled(Main)`
    display: grid;
    place-content: center;
    gap: ${({theme}) => theme.spacing.md}
`