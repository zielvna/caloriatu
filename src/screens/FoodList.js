import { Body } from '../components/Body';
import { FoodListSection } from '../components/FoodListSection';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Screen } from '../components/Screen';

export const FoodListScreen = () => (
    <Screen>
        <Header scheme="normal" title="Food List" />
        <Body>
            <FoodListSection />
        </Body>
        <Menu active="FoodList" />
    </Screen>
);
