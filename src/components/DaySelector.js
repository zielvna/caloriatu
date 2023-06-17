import { Dimensions } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { Day } from './Day';
import { change } from '../slices/selectedDateSlice';
import { Wrapper } from './Wrapper';

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

        setRows([...weeks]);
        dispatch(change(date.getTime()));

        daySelectorRef.current?.scrollTo({
            x: windowWidth * 2,
            animated: false,
        });
    }, []);

    const dateClick = (date) => {
        dispatch(change(date.getTime()));
    };

    return (
        <Wrapper>
            <DaySelectorContainer ref={daySelectorRef} horizontal disableIntervalMomentum snapToInterval={windowWidth}>
                {rows.map((row, index) => (
                    <Week key={index}>
                        {row.map((date, index) => (
                            <Day
                                key={index}
                                date={date}
                                selected={date.getTime() === new Date(selectedDate).getTime()}
                                dayClick={(date) => dateClick(date)}
                            />
                        ))}
                    </Week>
                ))}
            </DaySelectorContainer>
        </Wrapper>
    );
};

const DaySelectorContainer = styled.ScrollView`
    background-color: ${(props) => props.theme.colors.backgroundColor};
    height: ${Math.floor(windowWidth / 7)}px;
`;

const Week = styled.View`
    width: ${windowWidth}px;
    flex: 1;
    flex-direction: row;
`;
