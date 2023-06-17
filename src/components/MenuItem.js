import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import { themeConstant } from '../Theme';

export const MenuItem = ({ icon, description, isActive = false }) => (
    <Container>
        <MaterialIcons
            name={icon}
            color={isActive ? themeConstant.colors.primaryColor : themeConstant.colors.backgroundColor}
            size={24}
        />
        <Description isActive={isActive}>{description}</Description>
    </Container>
);

const Container = styled.View`
    justify-content: center;
    align-items: center;
`;

const Description = styled.Text`
    font-family: ${(props) => props.theme.fonts.bold};
    color: ${(props) => (props.isActive ? props.theme.colors.primaryColor : props.theme.colors.backgroundColor)};
`;
