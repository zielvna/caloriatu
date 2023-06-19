import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { themeConstant } from '../Theme';
import { changeMeal } from '../slices/selectSlice';
import { Section } from './Section';
import { Tile } from './Tile';

export const FoodSection = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const tileClick = (mealType) => {
        navigation.push('Meal');
        dispatch(changeMeal(mealType));
    };

    return (
        <Section title="Food" stats="600 kcal/2000 kcal">
            <Tile
                backgroundColor={themeConstant.colors.breakfastColor}
                title="Breakfast"
                description="300 kcal"
                onPress={() => tileClick('breakfast')}
            >
                <MaterialIcons name="chevron-right" color={themeConstant.colors.backgroundColor} size={36} />
            </Tile>
            <Tile
                backgroundColor={themeConstant.colors.lunchColor}
                title="Lunch"
                description="300 kcal"
                onPress={() => tileClick('lunch')}
            >
                <MaterialIcons name="chevron-right" color={themeConstant.colors.backgroundColor} size={36} />
            </Tile>
            <Tile
                backgroundColor={themeConstant.colors.dinnerColor}
                title="Dinner"
                description="300 kcal"
                onPress={() => tileClick('dinner')}
            >
                <MaterialIcons name="chevron-right" color={themeConstant.colors.backgroundColor} size={36} />
            </Tile>
            <Tile
                backgroundColor={themeConstant.colors.snackColor}
                title="Snack"
                description="300 kcal"
                onPress={() => tileClick('snack')}
            >
                <MaterialIcons name="chevron-right" color={themeConstant.colors.backgroundColor} size={36} />
            </Tile>
        </Section>
    );
};
