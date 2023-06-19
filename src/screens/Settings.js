import { Body } from '../components/Body';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Screen } from '../components/Screen';
import { SettingsSection } from '../components/SettingsSection';

export const Settings = () => (
    <Screen>
        <Header scheme="normal" title="Settings" />
        <Body>
            <SettingsSection />
        </Body>
        <Menu active="Settings" />
    </Screen>
);
