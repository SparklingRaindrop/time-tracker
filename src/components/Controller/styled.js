import styled from 'styled-components';
import { IconButton } from '../../components';

export const ControllerButton = styled(IconButton)`
    width: 2rem;
`;

export const Wrapper = styled.div`
    max-width: 40%;
    padding: 0.5rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.spacing.sm};
`;