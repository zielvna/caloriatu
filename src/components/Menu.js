import styled from 'styled-components/native';
import { MenuItem } from './MenuItem';

export const Menu = () => (
    <Container>
        <MenuItem icon="restaurant" description="menu" isActive />
        <MenuItem icon="menu-book" description="food list" />
        <MenuItem icon="settings" description="settings" />
    </Container>
);

const Container = styled.View`
    background-color: ${(props) => props.theme.colors.contrastColor};
    height: 60px;
    flex-direction: row;
    justify-content: space-evenly;
`;
