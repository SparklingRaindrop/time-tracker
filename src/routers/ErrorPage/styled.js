import styled from 'styled-components';
import { Main } from '../../components';

export const Wrapper = styled(Main)`
    width: 100vw;
    height: 100vh;

    display: grid;
    place-content: center;
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.md};
`;