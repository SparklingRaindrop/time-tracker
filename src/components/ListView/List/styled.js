import styled from 'styled-components';
import Wrapper from '../../Wrapper';

export const Container = styled(Wrapper)`
    background: ${({theme, $filled}) => $filled && theme.colors.white};
    overflow-y: auto;
`;

export const ListWrapper = styled.ul`
    list-style-type: none;
    padding-left: 0;
`;


