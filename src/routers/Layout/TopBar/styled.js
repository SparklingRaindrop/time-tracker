import styled from 'styled-components';
import { Nav } from '../../../components';

export const Wrapper = styled(Nav)`
    place-content: center start;
    background: ${({theme}) => theme.colors.primary};
    text-transform: capitalize;
`;