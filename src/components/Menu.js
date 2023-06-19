import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { MenuItem } from './MenuItem';

export const Menu = ({ active }) => {
    const navigation = useNavigation();

    const navigate = (screen) => {
        navigation.reset({
            index: 0,
            routes: [{ name: screen }],
        });
    };

    return (
        <Container>
            <MenuItem
                icon="restaurant"
                description="menu"
                onPress={() => navigate('Home')}
                isActive={active === 'Home'}
            />
            <MenuItem
                icon="menu-book"
                description="food list"
                onPress={() => navigate('FoodList')}
                isActive={active === 'FoodList'}
            />
            <MenuItem
                icon="settings"
                description="settings"
                onPress={() => navigate('Settings')}
                isActive={active === 'Settings'}
            />
        </Container>
    );
};

const Container = styled.View`
    background-color: ${(props) => props.theme.colors.contrastColor};
    height: 60px;
    flex-direction: row;
    justify-content: space-evenly;
`;
