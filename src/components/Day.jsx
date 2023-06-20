import { memo } from 'react';
import { Dimensions, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { changeDate } from '../slices/selectSlice';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const windowWidth = Dimensions.get('window').width - 24;

export const Day = memo(({ date, selected }) => {
    const dispatch = useDispatch();

    return (
        <TouchableWithoutFeedback onPress={() => dispatch(changeDate(date))}>
            <Container selected={selected}>
                <Monthday selected={selected}>{new Date(date).getDate()}</Monthday>
                <Weekday selected={selected}>{weekdays[new Date(date).getDay()]}</Weekday>
            </Container>
        </TouchableWithoutFeedback>
    );
});

const Container = styled.View`
    ${(props) => props.selected && `background: ${props.theme.colors.primaryColor}`};
    width: ${Math.floor(windowWidth / 7)}px;
    border-radius: 1000px;
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
