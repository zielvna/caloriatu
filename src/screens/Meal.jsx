import { useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Screen } from '../components/Screen';
import { Wrapper } from '../components/Wrapper';
import { MealLayout } from '../layouts/MealLayout';

export const Meal = () => {
    const meal = useSelector((state) => state.select.value.meal);

    return (
        <Screen>
            <Header scheme="normal" title={meal.replace(/^./, meal[0].toUpperCase())} />
            <Wrapper>
                <MealLayout />
            </Wrapper>
            <Menu />
        </Screen>
    );
};
