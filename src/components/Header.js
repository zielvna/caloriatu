import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { themeConstant } from '../Theme';

export const Header = ({ scheme = 'normal', title, buttonText, buttonClick, date }) => {
    const navigation = useNavigation();
    const index = useNavigationState(({ index }) => index);

    let content = null;

    if (scheme === 'normal') {
        content = (
            <>
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
                    <TouchableWithoutFeedback onPress={buttonClick}>
                        <RightText>{buttonText}</RightText>
                    </TouchableWithoutFeedback>
                </RightSide>
            </>
        );
    } else {
        content = (
            <>
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
                {scheme === 'home' && <Month>{date}</Month>}
            </>
        );
    }

    return (
        <HeaderContainer scheme={scheme}>
            <StatusBar backgroundColor="#ffffff" />
            <HeaderFlex scheme={scheme}>{content}</HeaderFlex>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.View`
    background-color: ${(props) =>
        props.scheme === 'start' ? props.theme.colors.primaryColor : props.theme.colors.backgroundColor};
    margin: ${Constants.statusBarHeight}px 0 0 0;
    height: 60px;
`;

const HeaderFlex = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: ${(props) => (props.scheme === 'normal' ? '0 12px 0 0' : '0 12px')};
`;

const LeftSide = styled.View`
    flex: 1;
`;

const MiddleSide = styled.View`
    flex: 2;
`;

const MiddleText = styled.Text`
    color: ${(props) => props.theme.colors.contrastColor};
    font-family: ${(props) => props.theme.fonts.bold};
    font-size: 16px;
    text-align: center;
`;

const RightSide = styled.View`
    flex: 1;
`;

const RightText = styled.Text`
    color: ${(props) => props.theme.colors.primaryColor};
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 16px;
    text-align: right;
`;

const Logo = styled.Text`
    color: ${(props) =>
        props.scheme === 'start' ? props.theme.colors.backgroundColor : props.theme.colors.contrastColor};
    font-family: ${(props) => props.theme.fonts.bold};
    font-size: 24px;
    margin-right: 12px;
`;

const LogoFlex = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    ${(props) => props.scheme === 'start' && 'justify-content: center;'}
`;

const Month = styled.Text`
    color: ${(props) => props.theme.colors.secondGray};
    font-family: ${(props) => props.theme.fonts.regular};
`;
