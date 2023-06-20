import { useRef } from 'react';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Screen } from '../components/Screen';
import { Wrapper } from '../components/Wrapper';
import { SettingsLayout } from '../layouts/SettingsLayout';

export const Settings = ({ route }) => {
    const formikRef = useRef();

    const submitForm = () => {
        formikRef.current.submitForm();
    };

    return (
        <Screen>
            <Header scheme="normal" title="Settings" buttonText="Save" onButtonPress={submitForm} />
            <Wrapper>
                <SettingsLayout ref={formikRef} />
            </Wrapper>
            {!route?.params?.hideMenu && <Menu active="Settings" />}
        </Screen>
    );
};
