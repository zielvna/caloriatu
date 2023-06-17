import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import { themeConstant } from '../Theme';
import { Section } from './Section';

export const WaterSection = () => {
    return (
        <Section title="Water" stats="200 ml/2000 ml">
            <Container>
                <MaterialIcons name="local-drink" color={themeConstant.colors.waterFullColor} size={36} />
                <MaterialIcons name="local-drink" color={themeConstant.colors.waterFullColor} size={36} />
                <MaterialIcons name="local-drink" color={themeConstant.colors.waterEmptyColor} size={36} />
                <MaterialIcons name="local-drink" color={themeConstant.colors.waterEmptyColor} size={36} />
                <MaterialIcons name="local-drink" color={themeConstant.colors.waterEmptyColor} size={36} />
                <MaterialIcons name="local-drink" color={themeConstant.colors.waterEmptyColor} size={36} />
                <MaterialIcons name="local-drink" color={themeConstant.colors.waterEmptyColor} size={36} />
                <MaterialIcons name="local-drink" color={themeConstant.colors.waterEmptyColor} size={36} />
                <MaterialIcons name="local-drink" color={themeConstant.colors.waterEmptyColor} size={36} />
                <MaterialIcons name="local-drink" color={themeConstant.colors.waterEmptyColor} size={36} />
            </Container>
        </Section>
    );
};

const Container = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;
