import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components/native';
import { themeConstant } from '../Theme';
import { remove } from '../slices/foodListSlice';
import { Button } from './Button';
import { Tile } from './Tile';

export const FoodListSection = ({ action }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const foodList = useSelector((state) => state.foodList.value);

    return (
        <>
            <Tile
                backgroundColor={themeConstant.colors.primaryColor}
                title="Add new food"
                description={`Total: ${foodList.length} foods.`}
            >
                <Button onPress={() => navigation.push('ManageFoodListFood', { action: 'add' })}>Add</Button>
            </Tile>
            {foodList.map((food) => (
                <Tile
                    key={food.id}
                    backgroundColor={themeConstant.colors.firstGray}
                    title={food.name}
                    description={`${food.energy} kcal/100 g - ${food.portionSize} g/1 portion`}
                    colorScheme="dark"
                >
                    <Group>
                        {action === 'add' ? (
                            <MaterialIcons
                                name="add"
                                color={themeConstant.colors.secondGray}
                                size={32}
                                onPress={() => navigation.push('ManageMealFood', { action: 'add', food })}
                            />
                        ) : (
                            <>
                                <MaterialIcons
                                    name="edit"
                                    color={themeConstant.colors.secondGray}
                                    size={32}
                                    onPress={() => navigation.push('ManageFoodListFood', { action: 'edit', food })}
                                />
                                <MaterialIcons
                                    name="delete"
                                    color={themeConstant.colors.secondGray}
                                    size={32}
                                    onPress={() => dispatch(remove(food))}
                                />
                            </>
                        )}
                    </Group>
                </Tile>
            ))}
        </>
    );
};

const Group = styled.View`
    flex-direction: row;
`;
