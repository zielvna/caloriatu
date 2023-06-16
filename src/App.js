import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { HomeScreen } from './screens/Home';
import { Theme } from './Theme';
import { store } from './store';
import { Provider } from 'react-redux';

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
