import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Screen } from '../components/Screen';
import { Wrapper } from '../components/Wrapper';
import { FoodSectionLayout } from '../layouts/FoodSectionLayout';
import { GoalSectionLayout } from '../layouts/GoalSectionLayout';
import { WaterSectionLayout } from '../layouts/WaterSectionLayout';

export const Home = () => (
    <Screen>
        <Header scheme="home" />
        <Wrapper>
            <FoodSectionLayout />
            <WaterSectionLayout />
            <GoalSectionLayout />
        </Wrapper>
        <Menu active="Home" />
    </Screen>
);
