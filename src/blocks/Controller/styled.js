import styled from 'styled-components';
import Icon from '../../components/Icon/Icon';

export const ControllerIcon = styled(Icon)`
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