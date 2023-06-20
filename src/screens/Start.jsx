import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { Screen } from '../components/Screen';
import { StartLayout } from '../layouts/StartLayout';
import { changeDate } from '../slices/selectSlice';

export const Start = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const isProfileCompleted = useSelector((state) => state.settings.value.isProfileCompleted);

    useEffect(() => {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        dispatch(changeDate(date.getTime()));

        if (isProfileCompleted) {
            navigation.navigate('Home');
        }
    }, []);

    return (
        <Screen>
            <Header scheme="start" />
            <StartLayout />
        </Screen>
    );
};
