import styled from 'styled-components/native';
import { themeConstant } from '../Theme';
import { Button } from './Button';
import { Section } from './Section';
import { Tile } from './Tile';

export const GoalSection = () => {
    return (
        <Section title="Goal">
            <Tile
                backgroundColor={themeConstant.colors.goalColor}
                title="You will achieve your goal on:"
                description="03 Aug 2023"
                isHorizontal={false}
            >
                <ButtonContainer>
                    <Button>Log current weight</Button>
                </ButtonContainer>
            </Tile>
        </Section>
    );
};

const ButtonContainer = styled.View`
    width: 192px;
`;
