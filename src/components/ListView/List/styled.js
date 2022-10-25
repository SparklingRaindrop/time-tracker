import styled from 'styled-components';
import Wrapper from '../../Wrapper';

export const Container = styled(Wrapper)`
    background: ${({theme, $filled}) => $filled && theme.colors.white};
    ${({$round}) => $round && 'border-top-left-radius: 1rem; border-top-right-radius: 1rem;'}
`;

export const ListWrapper = styled.ul`
    list-style-type: none;
    padding-left: 0;

    & > li {
        ${({$separate}) => $separate && 'margin: 0.5rem 0;'};
    }
`;