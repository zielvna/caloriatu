import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const Day = ({ date, selected, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Container selected={selected}>
                <Monthday selected={selected}>{new Date(date).getDate()}</Monthday>
                <Weekday selected={selected}>{weekdays[new Date(date).getDay()]}</Weekday>
            </Container>
        </TouchableWithoutFeedback>
    );
};

const Container = styled.View`
    ${(props) => props.selected && `background: ${props.theme.colors.primaryColor}`};
    flex: 1;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;

const Monthday = styled.Text`
    font-family: ${(props) => props.theme.fonts.bold};
    color: ${(props) => (props.selected ? props.theme.colors.backgroundColor : props.theme.colors.contrastColor)};
    font-size: 16px;
`;

const Weekday = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => (props.selected ? props.theme.colors.backgroundColor : props.theme.colors.secondGray)};
`;
