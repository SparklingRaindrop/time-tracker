import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const colors = {
    primary: '#73C398',
    secondary: '#073127',
    primaryWhite: '#F8FAF5',
    white: '#ffffff',
    black: '#06231f',
    black10: '#06231f19',
    grey: '#7D8079',
    highlight: '#93ECB2',
}
const theme = {
    colors,
};

export default function ThemeProvider(props) {
    const { children } = props;
    return (
        <StyledThemeProvider theme={theme}>
            {children}
        </StyledThemeProvider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.array,
};