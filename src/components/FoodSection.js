import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { themeConstant } from '../Theme';
import { changeMeal } from '../slices/selectSlice';
import { Section } from './Section';
import { Tile } from './Tile';

export const FoodSection = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const { date } = useSelector((state) => state.select.value);
    const day = useSelector((state) => state.dayList.value.filter((day) => day.date === date)[0]);

    const tileClick = (mealType) => {
        dispatch(changeMeal(mealType));
        navigation.push('Meal');
    };

    const calculateCalories = (meal) => {
        let calories = 0;

        day?.meals[meal].map((food) => {
            calories += Math.floor((food.portionSize * food.portions * food.energy) / 100);
        });

        return calories;
    };

    const calculateTotalCalories = () => {
        return (
            calculateCalories('breakfast') +
            calculateCalories('lunch') +
            calculateCalories('dinner') +
            calculateCalories('snack')
        );
    };

    return (
        <Section title="Food" stats={`${calculateTotalCalories()} kcal/2000 kcal`}>
            <Tile
                backgroundColor={themeConstant.colors.breakfastColor}
                title="Breakfast"
                description={`${calculateCalories('breakfast')} kcal`}
                onPress={() => tileClick('breakfast')}
            >
                <MaterialIcons name="chevron-right" color={themeConstant.colors.backgroundColor} size={36} />
            </Tile>
            <Tile
                backgroundColor={themeConstant.colors.lunchColor}
                title="Lunch"
                description={`${calculateCalories('lunch')} kcal`}
                onPress={() => tileClick('lunch')}
            >
                <MaterialIcons name="chevron-right" color={themeConstant.colors.backgroundColor} size={36} />
            </Tile>
            <Tile
                backgroundColor={themeConstant.colors.dinnerColor}
                title="Dinner"
                description={`${calculateCalories('dinner')} kcal`}
                onPress={() => tileClick('dinner')}
            >
                <MaterialIcons name="chevron-right" color={themeConstant.colors.backgroundColor} size={36} />
            </Tile>
            <Tile
                backgroundColor={themeConstant.colors.snackColor}
                title="Snack"
                description={`${calculateCalories('snack')} kcal`}
                onPress={() => tileClick('snack')}
            >
                <MaterialIcons name="chevron-right" color={themeConstant.colors.backgroundColor} size={36} />
            </Tile>
        </Section>
    );
};
