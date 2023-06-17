import { styled } from 'styled-components/native';

export const Button = ({ children }) => {
    return (
        <Container>
            <Content>{children}</Content>
        </Container>
    );
};

const Container = styled.View`
    background-color: ${(props) => props.theme.colors.backgroundColor};
    padding: 9px 18px;
    border-radius: 12px;
    align-self: flex-start;
`;

const Content = styled.Text`
    font-family: ${(props) => props.theme.fonts.bold};
    color: ${(props) => props.theme.colors.contrastColor};
`;
