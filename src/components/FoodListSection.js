import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { styled } from 'styled-components/native';
import { themeConstant } from '../Theme';
import { Button } from './Button';
import { Tile } from './Tile';

export const FoodListSection = () => {
    const foodListItems = [
        { id: 1, name: 'Bread', energy: 350, portion: 20 },
        { id: 2, name: 'Cheese', energy: 350, portion: 15 },
        { id: 3, name: 'Ham', energy: 250, portion: 15 },
    ];

    return (
        <>
            <Tile
                backgroundColor={themeConstant.colors.primaryColor}
                title="Create new food"
                description={`Total: ${foodListItems.length} foods.`}
            >
                <Button>Add</Button>
            </Tile>
            {foodListItems.map(({ id, name, energy, portion }) => (
                <Tile
                    key={id}
                    backgroundColor={themeConstant.colors.firstGray}
                    title={name}
                    description={`${energy} kcal/100 g - ${portion} g/1 portion`}
                    colorScheme="dark"
                >
                    <Group>
                        <MaterialIcons name="edit" color={themeConstant.colors.secondGray} size={32} />
                        <MaterialIcons name="delete" color={themeConstant.colors.secondGray} size={32} />
                    </Group>
                </Tile>
            ))}
        </>
    );
};

const Group = styled.View`
    flex-direction: row;
`;
