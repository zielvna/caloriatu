import { useRef } from 'react';
import { Body } from '../components/Body';
import { Header } from '../components/Header';
import { ManageFoodListItemSection } from '../components/ManageFoodListItemSection';
import { Menu } from '../components/Menu';
import { Screen } from '../components/Screen';

export const ManageFoodListItem = ({ route }) => {
    const formikRef = useRef();

    const submitForm = () => {
        formikRef.current.submitForm();
    };

    return (
        <Screen>
            <Header
                scheme="normal"
                title={`${route.params.type === 'add' ? 'Add' : 'Edit'} food list item`}
                buttonText="Save"
                onButtonPress={submitForm}
            />
            <Body>
                <ManageFoodListItemSection foodListItem={route.params.foodListItem} ref={formikRef} />
            </Body>
            <Menu active="Home" />
        </Screen>
    );
};
