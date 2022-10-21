import styled from 'styled-components';
import { IconButton } from '../../components';

export const ControllerButton = styled(IconButton)`
    width: 100%;
    
    & svg {
        width: 2.5rem;
        height: 2.5rem;
        padding: 0.2rem;
    }
`;

export const Wrapper = styled.div`
    max-width: 30%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.spacing.sm};
`;