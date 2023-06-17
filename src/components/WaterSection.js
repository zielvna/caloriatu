import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import { Section } from './Section';
import { Wrapper } from './Wrapper';
import { themeConstant } from '../Theme';

export const WaterSection = () => {
    return (
        <Wrapper>
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
        </Wrapper>
    );
};

const Container = styled.View`
    flex: 1;
    flex-basis: auto;
    flex-direction: row;
    flex-wrap: wrap;
`;
