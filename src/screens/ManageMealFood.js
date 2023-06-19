import { useRef } from 'react';
import { Body } from '../components/Body';
import { Header } from '../components/Header';
import { ManageMealFoodSection } from '../components/ManageMealFoodSection';
import { Screen } from '../components/Screen';

export const ManageMealFood = ({ route }) => {
    const formikRef = useRef();

    const submitForm = () => {
        formikRef.current.submitForm();
    };

    return (
        <Screen>
            <Header
                scheme="normal"
                title={`${route.params.action === 'add' ? 'Add' : 'Edit'} meal food`}
                buttonText="Save"
                onButtonPress={submitForm}
            />
            <Body>
                <ManageMealFoodSection food={route.params.food} action={route.params.action} ref={formikRef} />
            </Body>
        </Screen>
    );
};
