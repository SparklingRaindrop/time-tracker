import styled from 'styled-components';
import { Wrapper as StyledWrapper } from '../../../components';

export const Wrapper = styled.div`
    // Lower half is 40%
    height: 60%;
    padding: 0;

    display: flex;
    flex-direction: column;
    gap: 0.2rem;
`;

export const CalenderWrapper = styled(StyledWrapper)`
    height: 100%;
    overflow-y: scroll;
    padding: 0 1rem;
`;

export const Calender = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${({theme}) => theme.spacing.md};
`;