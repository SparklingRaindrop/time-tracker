import styled from 'styled-components';
import { Wrapper } from '../../../../components';

export const OuterWrapper = styled(Wrapper)`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    overflow-y: auto;
`;