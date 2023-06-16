import { ThemeProvider } from 'styled-components/native';

export const themeConstant = {
    colors: {
        primaryColor: '#ffbe76',
        backgroundColor: '#ffffff',
        contrastColor: '#3d3d3d',
        firstGray: '#f7f7f7',
        secondGray: '#979797',
    },
    fonts: {
        regular: 'Nunito_400Regular',
        bold: 'Nunito_700Bold',
    },
};

export const Theme = ({ children }) => <ThemeProvider theme={themeConstant}>{children}</ThemeProvider>;
