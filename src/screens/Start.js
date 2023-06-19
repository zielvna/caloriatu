import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { Screen } from '../components/Screen';
import { StartSection } from '../components/StartSection';

export const Start = () => {
    const navigation = useNavigation();
    const isProfileCompleted = useSelector((state) => state.settings.value.isProfileCompleted);

    useEffect(() => {
        if (isProfileCompleted) {
            navigation.navigate('Home');
        }
    }, []);

    return (
        <Screen>
            <Header scheme="start" />
            <StartSection />
        </Screen>
    );
};
