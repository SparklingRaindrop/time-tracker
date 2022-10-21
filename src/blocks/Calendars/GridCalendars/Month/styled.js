import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    padding: 1.5rem 0;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
    gap: 0.2rem;
`;

export const DayOfWeek = styled.div`
    width: 100%;
    text-align: center;
`;