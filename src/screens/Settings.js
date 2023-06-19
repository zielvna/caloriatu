import { useRef } from 'react';
import { Body } from '../components/Body';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Screen } from '../components/Screen';
import { SettingsSection } from '../components/SettingsSection';

export const Settings = () => {
    const formikRef = useRef();

    const submitForm = () => {
        formikRef.current.submitForm();
    };

    return (
        <Screen>
            <Header scheme="normal" title="Settings" buttonText="Save" onButtonPress={submitForm} />
            <Body>
                <SettingsSection ref={formikRef} />
            </Body>
            <Menu active="Settings" />
        </Screen>
    );
};
