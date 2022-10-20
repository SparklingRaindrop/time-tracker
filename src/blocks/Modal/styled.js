import styled from 'styled-components';
import { IconButton } from '../../components';

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({theme}) => theme.colors.grey}91;
`;

export const Wrapper = styled.div`
    padding: 1rem 1rem 2rem;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2rem;
    right: 2rem;
    
    background: ${({theme}) => theme.colors.primaryWhite};
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.lg};
    align-items: center;
`;

///// Elements for the content

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const CloseButton = styled(IconButton)`
    align-self: flex-start;
`;

export const Tag = styled.div`
    align-self: flex-start;

    display: flex;
    justify-content: center;
    gap:  ${({theme}) => theme.spacing.sm};
`;

export const Title = styled.h2`
    width: 100%;
    text-align: center;
`;

export const Label = styled.label`
    text-transform: capitalize;
`;

export const Colors = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-template-rows: repeat(2, auto);
    justify-content: space-evenly;
    gap: ${({theme}) => theme.spacing.sm}
`;

export const ColorSwatch = styled.button`
    width: 1.5rem;
    padding: 1.5rem;
    border: none;
    background: ${({$color}) => $color};
    border-radius: 50%;
`;