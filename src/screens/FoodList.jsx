import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Screen } from '../components/Screen';
import { Wrapper } from '../components/Wrapper';
import { FoodListLayout } from '../layouts/FoodListLayout';

export const FoodList = ({ route }) => (
    <Screen>
        <Header scheme="normal" title="Food List" />
        <Wrapper>
            <FoodListLayout action={route.params?.action} />
        </Wrapper>
        <Menu active="FoodList" />
    </Screen>
);
