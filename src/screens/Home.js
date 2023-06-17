import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { DaySelector } from '../components/DaySelector';
import { FoodSection } from '../components/FoodSection';
import { WaterSection } from '../components/WaterSection';
import { GoalSection } from '../components/GoalSection';
import { Menu } from '../components/Menu';
import { styled } from 'styled-components/native';

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

export const HomeScreen = () => {
    const selectedDate = useSelector((state) => state.selectedDate.value);

    return (
        <Container>
            <View>
                <Header
                    scheme="home"
                    date={`${months[new Date(selectedDate).getMonth()]} ${new Date(selectedDate).getFullYear()}`}
                />
            </View>
            <ScrollViewContainer>
                <ScrollView>
                    <DaySelector />
                    <FoodSection />
                    <WaterSection />
                    <GoalSection />
                </ScrollView>
            </ScrollViewContainer>
            <Menu />
        </Container>
    );
};

const Container = styled.View`
    flex: 1;
`;

const ScrollViewContainer = styled.View`
    flex: 1;
    flex-grow: 1;
`;
