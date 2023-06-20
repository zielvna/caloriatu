import { useRef } from 'react';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Screen } from '../components/Screen';
import { Wrapper } from '../components/Wrapper';
import { ManageFoodListFoodLayout } from '../layouts/ManageFoodListFoodLayout';

export const ManageFoodListFood = ({ route }) => {
    const formikRef = useRef();

    const submitForm = () => {
        formikRef.current.submitForm();
    };

    return (
        <Screen>
            <Header
                scheme="normal"
                title={`${route.params.action === 'add' ? 'Add' : 'Edit'} food list food`}
                buttonText="Save"
                onButtonPress={submitForm}
            />
            <Wrapper>
                <ManageFoodListFoodLayout food={route.params.food} action={route.params.action} ref={formikRef} />
            </Wrapper>
            <Menu />
        </Screen>
    );
};
