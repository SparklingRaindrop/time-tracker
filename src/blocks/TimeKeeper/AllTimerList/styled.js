import styled from 'styled-components';
import { List, ListItem } from '../../../components';

export const ListWrapper = styled(List)`
    position:absolute;
    bottom: 0;
    top: 60%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
`;

export const ListItemWrapper = styled(ListItem)`
    &:not(:last-of-type) {
        border-bottom: 1px solid ${({theme}) => theme.colors.grey};
    }
`;