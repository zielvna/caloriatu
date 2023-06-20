import { useNavigation } from '@react-navigation/native';
import { styled } from 'styled-components/native';
import { Button } from '../components/Button';

export const StartLayout = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <Title>Welcome to caloriatu.</Title>
            <Description>Create your profile and start losing weight!</Description>
            <ButtonContainer>
                <Button onPress={() => navigation.push('Settings', { hideMenu: true })}>Start</Button>
            </ButtonContainer>
        </Container>
    );
};

const Container = styled.View`
    flex-grow: 1;
    background-color: ${(props) => props.theme.colors.primaryColor};
    align-items: center;
    justify-content: center;
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.bold};
    color: ${(props) => props.theme.colors.backgroundColor};
    font-size: 28px;
`;

const Description = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.backgroundColor};
    font-size: 16px;
    margin: 0 0 24px 0;
`;

const ButtonContainer = styled.View`
    width: 192px;
`;
