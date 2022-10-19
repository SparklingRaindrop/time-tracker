import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    // OverlayListVIew is top: 60%;
    height: 60%;
    
    display: grid;
    align-items: center;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr auto 1fr;
`;

export const Time = styled.div`
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;

    font-size: 3rem;
`;