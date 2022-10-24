import styled from 'styled-components';
import { ListItem, List } from '../../../components';


export const ListWrapper = styled(List)`
    // Upper half is 60%
    height: 40%;
    overflow-y: auto;

    position:absolute;
    bottom: 0;
    top: 60%;
`;

export const ListItemWrapper = styled(ListItem)`
    &:not(:last-of-type) {
        border-bottom: 1px solid ${({theme}) => theme.colors.grey};
    }
`;