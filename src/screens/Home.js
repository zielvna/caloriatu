import { View, Text } from 'react-native';
import { Header } from '../components/Header';

export const HomeScreen = () => {
    return (
        <View>
            <Header scheme="home" date="June 2023" />
            <Text>Home Screen</Text>
        </View>
    );
};
