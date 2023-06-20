import { useEffect, useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { Day } from './Day';

const windowWidth = Dimensions.get('window').width - 24;

export const DaySelector = () => {
    const [days, setDays] = useState([]);
    const containerRef = useRef(null);
    const selectedDate = useSelector((state) => state.select.value.date);

    useEffect(() => {
        const date = new Date();
        date.setHours(0, 0, 0, 0);

        const days = [];

        for (let i = 0; i < 14; i++) {
            const thisDay = new Date();
            thisDay.setHours(0, 0, 0, 0);
            thisDay.setDate(date.getDate() - 13 + i);
            days.push(thisDay.getTime());
        }

        setDays(days);
    }, []);

    const onLayout = () => {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        const dayDifference = date - selectedDate;
        const pixelsToScroll = (14 - dayDifference / 86400000 - 4) * Math.floor(windowWidth / 7);
        containerRef.current.scrollTo({ y: pixelsToScroll });
    };

    return (
        <Container ref={containerRef} showsHorizontalScrollIndicator={false} horizontal={true} onLayout={onLayout}>
            {days.map((day) => (
                <Day key={day} date={day} selected={selectedDate === day} />
            ))}
        </Container>
    );
};

const Container = styled.ScrollView`
    background-color: ${(props) => props.theme.colors.backgroundColor};
    height: ${Math.floor(windowWidth / 7)}px;
    flex-direction: row;
`;
