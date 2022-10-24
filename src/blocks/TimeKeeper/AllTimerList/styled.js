import styled from 'styled-components';
import { List, ListItem } from '../../../components';

export const ListWrapper = styled(List)`
    height: 70%;
    position:absolute;
    bottom: 0;
    top: 30%;
    
    overflow-y: auto;
`;

export const ListItemWrapper = styled(ListItem)`
    &:not(:last-of-type) {
        border-bottom: 1px solid ${({theme}) => theme.colors.grey};
    }
`;