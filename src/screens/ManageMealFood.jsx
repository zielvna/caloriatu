import { useRef } from 'react';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Screen } from '../components/Screen';
import { Wrapper } from '../components/Wrapper';
import { ManageMealFoodLayout } from '../layouts/ManageMealFoodLayout';

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
            <Wrapper>
                <ManageMealFoodLayout food={route.params.food} action={route.params.action} ref={formikRef} />
            </Wrapper>
            <Menu />
        </Screen>
    );
};
