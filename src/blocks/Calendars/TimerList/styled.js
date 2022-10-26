import styled from 'styled-components';
import { List } from '../../../components';


export const ListWrapper = styled(List)`
    // Upper half is 60%
    height: 40%;
    overflow-y: auto;

    position:absolute;
    bottom: 0;
    top: 60%;
`;