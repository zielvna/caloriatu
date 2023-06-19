import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { themeConstant } from '../Theme';
import { Tile } from './Tile';

export const SettingsSection = () => (
    <>
        <Tile backgroundColor={themeConstant.colors.firstGray} title="Gender" description="Male" colorScheme="dark">
            <MaterialIcons name="chevron-right" color={themeConstant.colors.secondGray} size={36} />
        </Tile>
        <Tile
            backgroundColor={themeConstant.colors.firstGray}
            title="Age"
            description="20 years old"
            colorScheme="dark"
        >
            <MaterialIcons name="chevron-right" color={themeConstant.colors.secondGray} size={36} />
        </Tile>
        <Tile backgroundColor={themeConstant.colors.firstGray} title="Height" description="185 cm" colorScheme="dark">
            <MaterialIcons name="chevron-right" color={themeConstant.colors.secondGray} size={36} />
        </Tile>
        <Tile
            backgroundColor={themeConstant.colors.firstGray}
            title="Current weight"
            description="80 kg"
            colorScheme="dark"
        >
            <MaterialIcons name="chevron-right" color={themeConstant.colors.secondGray} size={36} />
        </Tile>
        <Tile
            backgroundColor={themeConstant.colors.firstGray}
            title="Goal weight"
            description="75 kg"
            colorScheme="dark"
        >
            <MaterialIcons name="chevron-right" color={themeConstant.colors.secondGray} size={36} />
        </Tile>
        <Tile
            backgroundColor={themeConstant.colors.firstGray}
            title="Weekly weight lose goal"
            description="1 kg"
            colorScheme="dark"
        >
            <MaterialIcons name="chevron-right" color={themeConstant.colors.secondGray} size={36} />
        </Tile>
        <Tile
            backgroundColor={themeConstant.colors.firstGray}
            title="Activity"
            description="Little to no exercise"
            colorScheme="dark"
        >
            <MaterialIcons name="chevron-right" color={themeConstant.colors.secondGray} size={36} />
        </Tile>
    </>
);
