import styled from 'styled-components';
import { Stopwatch } from '../../../components';

export const Wrapper = styled.div`
    width: 100%;
    // height 70% for lower half
    height: 30%;
    
    display: grid;
    align-items: center;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr auto 1fr;
`;

export const Time = styled(Stopwatch)`
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;

    font-size: 3rem;
`;