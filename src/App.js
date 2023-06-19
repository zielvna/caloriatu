import { Nunito_400Regular, Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { Theme } from './Theme';
import { FoodList } from './screens/FoodList';
import { Home } from './screens/Home';
import { ManageFoodListFood } from './screens/ManageFoodListFood';
import { ManageMealFood } from './screens/ManageMealFood';
import { Meal } from './screens/Meal';
import { Settings } from './screens/Settings';
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
                        <Screen name="Home" component={Home} />
                        <Screen name="FoodList" component={FoodList} />
                        <Screen name="ManageFoodListFood" component={ManageFoodListFood} />
                        <Screen name="Meal" component={Meal} />
                        <Screen name="ManageMealFood" component={ManageMealFood} />
                        <Screen name="Settings" component={Settings} />
                    </Navigator>
                </NavigationContainer>
            </Provider>
        </Theme>
    );
};

registerRootComponent(App);
