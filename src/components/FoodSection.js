import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { themeConstant } from '../Theme';
import { Section } from './Section';
import { Tile } from './Tile';

export const FoodSection = () => {
    return (
        <Section title="Food" stats="600 kcal/2000 kcal">
            <Tile backgroundColor={themeConstant.colors.breakfastColor} title="Breakfast" description="300 kcal">
                <MaterialIcons name="chevron-right" color={themeConstant.colors.backgroundColor} size={36} />
            </Tile>
            <Tile backgroundColor={themeConstant.colors.lunchColor} title="Lunch" description="300 kcal">
                <MaterialIcons name="chevron-right" color={themeConstant.colors.backgroundColor} size={36} />
            </Tile>
            <Tile backgroundColor={themeConstant.colors.dinnerColor} title="Dinner" description="300 kcal">
                <MaterialIcons name="chevron-right" color={themeConstant.colors.backgroundColor} size={36} />
            </Tile>
            <Tile backgroundColor={themeConstant.colors.snackColor} title="Snack" description="300 kcal">
                <MaterialIcons name="chevron-right" color={themeConstant.colors.backgroundColor} size={36} />
            </Tile>
        </Section>
    );
};
