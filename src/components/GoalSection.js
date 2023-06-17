import { Section } from '../components/Section';
import { Wrapper } from '../components/Wrapper';
import { Tile } from '../components/Tile';
import { themeConstant } from '../Theme';
import { Button } from './Button';

export const GoalSection = () => {
    return (
        <Wrapper>
            <Section title="Goal">
                <Tile
                    backgroundColor={themeConstant.colors.goalColor}
                    title="You will achieve your goal on:"
                    description="03 Aug 2023"
                    isHorizontal={false}
                >
                    <Button>Log current weight</Button>
                </Tile>
            </Section>
        </Wrapper>
    );
};
