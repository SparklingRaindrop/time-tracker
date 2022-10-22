import styled from 'styled-components';
import {Nav} from '../../../components';

export const Wrapper = styled(Nav)`
    grid-template-columns: repeat(3, 1fr);
    background: ${({theme}) => theme.colors.white};
    position: fixed;
    bottom: 0;
`;