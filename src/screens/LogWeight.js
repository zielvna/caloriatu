import { useRef } from 'react';
import { Body } from '../components/Body';
import { Header } from '../components/Header';
import { LogWeightSection } from '../components/LogWeightSection';
import { Menu } from '../components/Menu';
import { Screen } from '../components/Screen';

export const LogWeight = () => {
    const formikRef = useRef();

    const submitForm = () => {
        formikRef.current.submitForm();
    };

    return (
        <Screen>
            <Header scheme="normal" title="Log current weight" buttonText="Save" onButtonPress={submitForm} />
            <Body>
                <LogWeightSection ref={formikRef} />
            </Body>
            <Menu />
        </Screen>
    );
};
