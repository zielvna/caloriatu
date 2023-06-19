import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { themeConstant } from '../Theme';
import { setWater } from '../slices/dayListSlice';
import { Section } from './Section';

export const WaterSection = () => {
    const [lastClick, setLastClick] = useState();
    const dispatch = useDispatch();
    const { date } = useSelector((state) => state.select.value);
    const day = useSelector((state) => state.dayList.value.filter((day) => day.date === date)[0]);
    const settings = useSelector((state) => state.settings.value);

    const targetWaterConsumption = settings.currentWeight * 33;

    const waterGlassClick = (i) => {
        let water = i;

        if (i === lastClick) {
            water -= 1;
            setLastClick(null);
        } else {
            setLastClick(i);
        }

        dispatch(setWater({ date, water }));
    };

    return (
        <Section title="Water" stats={`${(day?.water ?? 0) * 250} ml/${targetWaterConsumption} ml`}>
            <Container>
                {Array.from(Array(Math.ceil(targetWaterConsumption / 250)).keys()).map((i) => (
                    <MaterialIcons
                        key={i}
                        name="local-drink"
                        color={
                            (day?.water ?? 0) > i
                                ? themeConstant.colors.waterFullColor
                                : themeConstant.colors.waterEmptyColor
                        }
                        size={36}
                        onPress={() => waterGlassClick(i + 1)}
                    />
                ))}
            </Container>
        </Section>
    );
};

const Container = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;
