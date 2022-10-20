import styled from 'styled-components';

export const ContentWrapper = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: ${({$noTopBar}) => $noTopBar ? '' : 'max-content'} 1fr max-content;
`;