import { useSelector } from 'react-redux';
import { Body } from '../components/Body';
import { Header } from '../components/Header';
import { MealSection } from '../components/MealSection';
import { Screen } from '../components/Screen';

export const Meal = () => {
    const meal = useSelector((state) => state.select.value.meal);

    return (
        <Screen>
            <Header scheme="normal" title={meal.replace(/^./, meal[0].toUpperCase())} />
            <Body>
                <MealSection />
            </Body>
        </Screen>
    );
};
