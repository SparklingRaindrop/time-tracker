import styled from 'styled-components';
import { ListItem } from '../../../../components';
import { ContentWrapper, GreyText } from '../../../../components/ListView';

export const Wrapper = styled(ListItem)`
    &:not(:last-of-type) {
        border-bottom: 1px solid ${({theme}) => theme.colors.grey};
    }
`;

export const Log = styled(GreyText)`
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
`;

export const Status = styled(GreyText)`
    grid-column: 3 / span 1;
    grid-row: 2 / span 1;
`;

export const Content = styled(ContentWrapper)`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1.5fr auto;
    align-items: center;
    gap: ${({theme}) => theme.spacing.sm};
`;