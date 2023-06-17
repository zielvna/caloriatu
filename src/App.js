import { Nunito_400Regular, Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { Theme } from './Theme';
import { HomeScreen } from './screens/Home';
import { store } from './store';

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {
    const [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Theme>
            <Provider store={store}>
                <NavigationContainer>
                    <Navigator
                        screenOptions={{
                            animation: 'none',
                            headerShown: false,
                        }}
                    >
                        <Screen name="Home" component={HomeScreen} />
                    </Navigator>
                </NavigationContainer>
            </Provider>
        </Theme>
    );
};

registerRootComponent(App);
