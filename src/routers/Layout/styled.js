import styled from 'styled-components';

export const ContentWrapper = styled.div`
    height: 100%;
    // To prevent getting behind the fixed nav bar
    padding-bottom: ${({$navbarHeight}) => `${$navbarHeight}px`};
    display: grid;
    grid-template-rows: ${({$noTopBar}) => $noTopBar ? '' : 'max-content'} 1fr max-content;
`;

export const Wrapper = styled.div`
    height: 100vh;
`;