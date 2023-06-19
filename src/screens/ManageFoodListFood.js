import { useRef } from 'react';
import { Body } from '../components/Body';
import { Header } from '../components/Header';
import { ManageFoodListFoodSection } from '../components/ManageFoodListFoodSection';
import { Screen } from '../components/Screen';

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
            <Body>
                <ManageFoodListFoodSection food={route.params.food} action={route.params.action} ref={formikRef} />
            </Body>
        </Screen>
    );
};
