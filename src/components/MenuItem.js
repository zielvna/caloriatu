import styled from 'styled-components/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { themeConstant } from '../Theme';

export const MenuItem = ({ isActive = false, content, icon }) => {
    return (
        <Container>
            <MaterialIcons
                name={icon}
                color={isActive ? themeConstant.colors.primaryColor : themeConstant.colors.backgroundColor}
                size={24}
            />
            <Content isActive={isActive}>{content}</Content>
        </Container>
    );
};

const Container = styled.View`
    justify-content: center;
    align-items: center;
`;
const Content = styled.Text`
    font-family: ${(props) => props.theme.fonts.bold};
    color: ${(props) => (props.isActive ? props.theme.colors.primaryColor : props.theme.colors.backgroundColor)};
`;
