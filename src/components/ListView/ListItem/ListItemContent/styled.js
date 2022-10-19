import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.sm};
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1.5fr 1fr;
    align-items: center;
    gap: ${({theme}) => theme.spacing.sm};
`;

export const ColorMarker = styled.div`
    width: 1rem;
    height: 1rem;

    grid-column: 1 / span 1;
    grid-row: 1 / span 2;

    border-radius: 50%;
    background: ${({$color}) => $color};
`;

export const Title = styled.div`
    grid-column: 2 / span 2;
    grid-row: 1 / span 1;

    font-size: 1.5rem;
`;

export const GreyText = styled.div`
    color: ${({theme}) => theme.colors.grey};
    font-size: 1rem;
`;

export const Log = styled(GreyText)`
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
`;

export const Status = styled(GreyText)`
    grid-column: 3 / span 1;
    grid-row: 2 / span 1;
`;
