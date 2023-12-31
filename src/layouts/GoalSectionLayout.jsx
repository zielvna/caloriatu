import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { Tile } from '../components/Tile';
import { themeConstant } from '../contexts/ThemeContext';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const GoalSectionLayout = () => {
    const navigation = useNavigation();
    const settings = useSelector((state) => state.settings.value);

    const getGoalDay = () => {
        const date = new Date();

        date.setDate(
            date.getDate() +
                Math.ceil(((settings.currentWeight - settings.goalWeight) / settings.weeklyWeightLoseGoal) * 7)
        );

        return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    };

    return (
        <Section title="Goal">
            <Tile
                backgroundColor={themeConstant.colors.goalColor}
                title="You will achieve your goal on:"
                description={getGoalDay()}
                isHorizontal={false}
            >
                <ButtonContainer>
                    <Button onPress={() => navigation.navigate('LogWeight')}>Log current weight</Button>
                </ButtonContainer>
            </Tile>
        </Section>
    );
};

const ButtonContainer = styled.View`
    width: 192px;
`;
