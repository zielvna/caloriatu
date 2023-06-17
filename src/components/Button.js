import { TouchableWithoutFeedback } from 'react-native';
import { styled } from 'styled-components/native';

export const Button = ({ children, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Container>
                <Description>{children}</Description>
            </Container>
        </TouchableWithoutFeedback>
    );
};

const Container = styled.View`
    background-color: ${(props) => props.theme.colors.backgroundColor};
    padding: 8px 16px;
    border-radius: 12px;
`;

const Description = styled.Text`
    font-family: ${(props) => props.theme.fonts.bold};
    color: ${(props) => props.theme.colors.contrastColor};
`;
