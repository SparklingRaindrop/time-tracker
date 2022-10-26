import styled from 'styled-components';
import { IconButton } from '../../components';

export const ControllerButton = styled(IconButton)`
    width: 100%;
    
    & svg {
        width: 2.3rem;
        height: 2.3rem;
        padding: 0.1rem;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.spacing.sm};
`;