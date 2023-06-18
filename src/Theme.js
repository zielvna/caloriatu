import { ThemeProvider } from 'styled-components/native';

export const themeConstant = {
    colors: {
        primaryColor: '#ffbe76',
        backgroundColor: '#ffffff',
        contrastColor: '#3d3d3d',
        firstGray: '#f7f7f7',
        secondGray: '#979797',
        breakfastColor: '#FF7979',
        lunchColor: '#F6E58D',
        dinnerColor: '#BADC58',
        snackColor: '#7ED6DF',
        waterFullColor: '#74B9FF',
        waterEmptyColor: '#D3D3D3',
        goalColor: '#A29BFE',
        errorColor: '#EB4D4B',
    },
    fonts: {
        regular: 'Nunito_400Regular',
        bold: 'Nunito_700Bold',
    },
};

export const Theme = ({ children }) => <ThemeProvider theme={themeConstant}>{children}</ThemeProvider>;
