import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { DaySelector } from '../components/DaySelector';
import { Section } from '../components/Section';
import { Wrapper } from '../components/Wrapper';
import { Tile } from '../components/Tile';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

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
            <Wrapper>
                <Section title="Food" stats="600 kcal/2000 kcal">
                    <Tile backgroundColor="#FF7979" title="Breakfast" description="300 kcal">
                        <MaterialIcons
                            name="chevron-right"
                            color="#ffffff"
                            size={36}
                            onPress={() => navigation.goBack()}
                        />
                    </Tile>
                    <Tile backgroundColor="#F6E58D" title="Lunch" description="300 kcal">
                        <MaterialIcons
                            name="chevron-right"
                            color="#ffffff"
                            size={36}
                            onPress={() => navigation.goBack()}
                        />
                    </Tile>
                    <Tile backgroundColor="#BADC58" title="Dinner" description="300 kcal">
                        <MaterialIcons
                            name="chevron-right"
                            color="#ffffff"
                            size={36}
                            onPress={() => navigation.goBack()}
                        />
                    </Tile>
                    <Tile backgroundColor="#7ED6DF" title="Snack" description="300 kcal">
                        <MaterialIcons
                            name="chevron-right"
                            color="#ffffff"
                            size={36}
                            onPress={() => navigation.goBack()}
                        />
                    </Tile>
                </Section>
            </Wrapper>
        </View>
    );
};
