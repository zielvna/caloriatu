import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Section } from '../components/Section';
import { Tile } from '../components/Tile';
import { themeConstant } from '../contexts/ThemeContext';
import { changeMeal } from '../slices/selectSlice';

export const FoodSectionLayout = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { date } = useSelector((state) => state.select.value);
    const day = useSelector((state) => state.dayList.value.filter((day) => day.date === date)[0]);
    const settings = useSelector((state) => state.settings.value);

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

    const calculateTargetCalorieIntake = () => {
        const dailyCalorieDeficit = Math.ceil(settings.weeklyWeightLoseGoal * 1100);

        let dailyCalorieBurnRate = 0;

        if (settings.gender) {
            dailyCalorieBurnRate = Math.floor(
                9.247 * settings.currentWeight + 3.098 * settings.height + 4.33 * settings.age + 447.593
            );
        } else {
            dailyCalorieBurnRate = Math.floor(
                13.397 * settings.currentWeight + 4.799 * settings.height + 5.677 * settings.age + 88.362
            );
        }

        switch (settings.activity) {
            case 0:
                dailyCalorieBurnRate = Math.floor(dailyCalorieBurnRate * 1.2);
                break;
            case 1:
                dailyCalorieBurnRate = Math.floor(dailyCalorieBurnRate * 1.37);
                break;
            case 2:
                dailyCalorieBurnRate = Math.floor(dailyCalorieBurnRate * 1.55);
                break;
            case 3:
                dailyCalorieBurnRate = Math.floor(dailyCalorieBurnRate * 1.7);
                break;
            case 4:
                dailyCalorieBurnRate = Math.floor(dailyCalorieBurnRate * 1.9);
                break;
        }

        return dailyCalorieBurnRate - dailyCalorieDeficit;
    };

    return (
        <Section title="Food" stats={`${calculateTotalCalories()} kcal/${calculateTargetCalorieIntake()} kcal`}>
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
