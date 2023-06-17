import { useEffect, useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { change } from '../slices/selectedDateSlice';
import { Day } from './Day';

const windowWidth = Dimensions.get('window').width - 24;

export const DaySelector = () => {
    const [rows, setRows] = useState([]);
    const daySelectorRef = useRef();
    const selectedDate = useSelector((state) => state.selectedDate.value);
    const dispatch = useDispatch();

    useEffect(() => {
        const date = new Date();
        date.setHours(0, 0, 0, 0);

        const weeks = [[], [], [], [], []];

        for (let i = 0; i < 35; i++) {
            const thisDay = new Date();
            thisDay.setHours(0, 0, 0, 0);
            thisDay.setDate(date.getDate() - date.getDay() - 13 + i);
            weeks[Math.floor(i / 7)].push(thisDay);
        }

        setRows(weeks);
        dispatch(change(date.getTime()));

        daySelectorRef.current?.scrollTo({
            x: windowWidth * 2,
            animated: false,
        });
    }, []);

    return (
        <Container ref={daySelectorRef} horizontal disableIntervalMomentum snapToInterval={windowWidth}>
            {rows.map((row, index) => (
                <Week key={index}>
                    {row.map((date, index) => (
                        <Day
                            key={index}
                            date={date}
                            selected={date.getTime() === new Date(selectedDate).getTime()}
                            onPress={() => dispatch(change(date.getTime()))}
                        />
                    ))}
                </Week>
            ))}
        </Container>
    );
};

const Container = styled.ScrollView`
    background-color: ${(props) => props.theme.colors.backgroundColor};
    height: ${Math.floor(windowWidth / 7)}px;
`;

const Week = styled.View`
    width: ${windowWidth}px;
    flex-direction: row;
`;
