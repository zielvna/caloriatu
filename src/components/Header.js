import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { themeConstant } from '../Theme';
import { DaySelector } from './DaySelector';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const Header = ({ scheme = 'normal', title, buttonText, onButtonPress }) => {
    const selectedDate = useSelector((state) => state.selectedDate.value);
    const navigation = useNavigation();
    const index = useNavigationState(({ index }) => index);

    let content = null;

    if (scheme === 'normal') {
        content = (
            <Main scheme={scheme}>
                <LeftSide>
                    {!!index && (
                        <MaterialIcons
                            name="chevron-left"
                            color={themeConstant.colors.contrastColor}
                            size={36}
                            onPress={() => navigation.goBack()}
                        />
                    )}
                </LeftSide>
                <MiddleSide>
                    <MiddleText>{title}</MiddleText>
                </MiddleSide>
                <RightSide>
                    <TouchableWithoutFeedback onPress={onButtonPress}>
                        <RightText>{buttonText}</RightText>
                    </TouchableWithoutFeedback>
                </RightSide>
            </Main>
        );
    } else {
        content = (
            <Main scheme={scheme}>
                <LogoFlex scheme={scheme}>
                    <Logo scheme={scheme}>caloriatu</Logo>
                    <MaterialIcons
                        name="fastfood"
                        color={
                            scheme === 'start'
                                ? themeConstant.colors.backgroundColor
                                : themeConstant.colors.contrastColor
                        }
                        size={28}
                    />
                </LogoFlex>
                {scheme === 'home' && (
                    <Month>{`${months[new Date(selectedDate).getMonth()]} ${new Date(
                        selectedDate
                    ).getFullYear()}`}</Month>
                )}
            </Main>
        );
    }

    return (
        <Container scheme={scheme}>
            <StatusBar
                backgroundColor={
                    scheme === 'start' ? themeConstant.colors.primaryColor : themeConstant.colors.backgroundColor
                }
            />
            {content}
            {scheme === 'home' && <DaySelector />}
        </Container>
    );
};

const Container = styled.View`
    background-color: ${(props) =>
        props.scheme === 'start' ? props.theme.colors.primaryColor : props.theme.colors.backgroundColor};
    margin: ${Constants.statusBarHeight}px 0 6px 0;
    padding: ${(props) => (props.scheme === 'normal' ? '0 12px 0 0' : '0 12px')};
`;

const Main = styled.View`
    height: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) => (props.scheme === 'start' ? 'center' : 'space-between')};
`;

const LeftSide = styled.View`
    flex: 1;
`;

const MiddleSide = styled.View`
    flex: 2;
`;

const RightSide = styled.View`
    flex: 1;
`;

const MiddleText = styled.Text`
    font-family: ${(props) => props.theme.fonts.bold};
    color: ${(props) => props.theme.colors.contrastColor};
    font-size: 16px;
    text-align: center;
`;

const RightText = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.primaryColor};
    font-size: 16px;
    text-align: right;
`;

const Logo = styled.Text`
    font-family: ${(props) => props.theme.fonts.bold};
    color: ${(props) =>
        props.scheme === 'start' ? props.theme.colors.backgroundColor : props.theme.colors.contrastColor};
    font-size: 24px;
    margin-right: 12px;
`;

const LogoFlex = styled.View`
    ${(props) => props.scheme === 'start' && 'justify-content: center;'}
    flex-direction: row;
    align-items: center;
`;

const Month = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.secondGray};
`;
