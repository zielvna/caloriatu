import { useRef } from 'react';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Screen } from '../components/Screen';
import { Wrapper } from '../components/Wrapper';
import { LogWeightLayout } from '../layouts/LogWeightLayout';

export const LogWeight = () => {
    const formikRef = useRef();

    const submitForm = () => {
        formikRef.current.submitForm();
    };

    return (
        <Screen>
            <Header scheme="normal" title="Log current weight" buttonText="Save" onButtonPress={submitForm} />
            <Wrapper>
                <LogWeightLayout ref={formikRef} />
            </Wrapper>
            <Menu />
        </Screen>
    );
};
