import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { Button } from '../components/Button';
import { Tile } from '../components/Tile';
import { themeConstant } from '../contexts/ThemeContext';
import { removeFood } from '../slices/dayListSlice';

export const MealLayout = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const { date, meal } = useSelector((state) => state.select.value);
    const day = useSelector((state) => state.dayList.value.filter((day) => day.date === date)[0]);

    const calculateCalories = () => {
        let calories = 0;

        day?.meals[meal].map((food) => {
            calories += Math.floor((food.portionSize * food.portions * food.energy) / 100);
        });

        return calories;
    };

    return (
        <>
            <Tile
                backgroundColor={themeConstant.colors.primaryColor}
                title="Add food"
                description={`Total: ${calculateCalories()} kcal.`}
            >
                <ButtonContainer>
                    <Button onPress={() => navigation.push('FoodList', { action: 'add' })}>Add</Button>
                </ButtonContainer>
            </Tile>
            {day?.meals[meal].map((food) => (
                <Tile
                    key={food.id}
                    backgroundColor={themeConstant.colors.firstGray}
                    title={food.name}
                    description={`${food.portions} portions - ${food.portionSize * food.portions} g - ${Math.floor(
                        (food.portionSize * food.portions * food.energy) / 100
                    )} kcal`}
                    colorScheme="dark"
                >
                    <Group>
                        <MaterialIcons
                            name="edit"
                            color={themeConstant.colors.secondGray}
                            size={32}
                            onPress={() => navigation.push('ManageMealFood', { action: 'edit', food })}
                        />
                        <MaterialIcons
                            name="delete"
                            color={themeConstant.colors.secondGray}
                            size={32}
                            onPress={() => dispatch(removeFood({ date, meal, food }))}
                        />
                    </Group>
                </Tile>
            ))}
        </>
    );
};

const Group = styled.View`
    flex-direction: row;
`;

const ButtonContainer = styled.View`
    width: 72px;
`;
