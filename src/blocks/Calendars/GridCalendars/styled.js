import styled from 'styled-components';
import { Wrapper } from '../../../components';

export const OuterWrapper = styled.div`
    // Lower half is 40%
    height: 60%;
    padding: 0;

    display: flex;
    flex-direction: column;
    gap: 0.2rem;
`;

export const CalenderWrapper = styled(Wrapper)`
    overflow-y: auto;
`;
