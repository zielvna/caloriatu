import { Body } from '../components/Body';
import { FoodSection } from '../components/FoodSection';
import { GoalSection } from '../components/GoalSection';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Screen } from '../components/Screen';
import { WaterSection } from '../components/WaterSection';

export const HomeScreen = () => (
    <Screen>
        <Header scheme="home" />
        <Body>
            <FoodSection />
            <WaterSection />
            <GoalSection />
        </Body>
        <Menu active="Home" />
    </Screen>
);
