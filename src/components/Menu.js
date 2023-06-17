import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { MenuItem } from './MenuItem';

export const Menu = () => {
    return (
        <Container>
            <MenuItem content="menu" icon="restaurant" isActive />
            <MenuItem content="food list" icon="menu-book" />
            <MenuItem content="settings" icon="settings" />
        </Container>
    );
};

const Container = styled.View`
    background-color: ${(props) => props.theme.colors.contrastColor};
    height: 60px;
    flex-direction: row;
    justify-content: space-evenly;
`;
