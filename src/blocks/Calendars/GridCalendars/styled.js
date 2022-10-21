import styled from 'styled-components';
import { Wrapper } from '../../../components';

export const OuterWrapper = styled(Wrapper)`
    // Lower half is 40%
    height: 60%;

    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    overflow-y: auto;
`;