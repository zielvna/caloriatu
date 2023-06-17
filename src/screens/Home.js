import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { DaySelector } from '../components/DaySelector';
import { FoodSection } from '../components/FoodSection';
import { WaterSection } from '../components/WaterSection';
import { GoalSection } from '../components/GoalSection';

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
        <View>
            <Header
                scheme="home"
                date={`${months[new Date(selectedDate).getMonth()]} ${new Date(selectedDate).getFullYear()}`}
            />
            <DaySelector />
            <FoodSection />
            <WaterSection />
            <GoalSection />
        </View>
    );
};
