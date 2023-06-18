import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components/native';
import { themeConstant } from '../Theme';
import { remove } from '../slices/foodListSlice';
import { Button } from './Button';
import { Tile } from './Tile';

export const FoodListSection = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const foodListItems = useSelector((state) => state.foodList.value);

    return (
        <>
            <Tile
                backgroundColor={themeConstant.colors.primaryColor}
                title="Create new food"
                description={`Total: ${foodListItems.length} foods.`}
            >
                <Button onPress={() => navigation.push('ManageListFood', { type: 'add' })}>Add</Button>
            </Tile>
            {foodListItems.map((foodListItem) => (
                <Tile
                    key={foodListItem.id}
                    backgroundColor={themeConstant.colors.firstGray}
                    title={foodListItem.name}
                    description={`${foodListItem.energy} kcal/100 g - ${foodListItem.portionSize} g/1 portion`}
                    colorScheme="dark"
                >
                    <Group>
                        <MaterialIcons
                            name="edit"
                            color={themeConstant.colors.secondGray}
                            size={32}
                            onPress={() =>
                                navigation.push('ManageListFood', { type: 'edit', foodListItem: foodListItem })
                            }
                        />
                        <MaterialIcons
                            name="delete"
                            color={themeConstant.colors.secondGray}
                            size={32}
                            onPress={() => dispatch(remove(foodListItem))}
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
