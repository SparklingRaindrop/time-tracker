import styled from 'styled-components';
import {NavRef} from '../../../components';

export const Wrapper = styled(NavRef)`
    grid-template-columns: repeat(3, 1fr);
    background: ${({theme}) => theme.colors.white};
    position: fixed;
    bottom: 0;
`;