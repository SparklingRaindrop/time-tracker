import styled from 'styled-components';
import { ContentWrapper } from '../../../components/ListView';

export const Content = styled(ContentWrapper)`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1.5fr auto;
    align-items: center;
    gap: ${({theme}) => theme.spacing.sm};
`;