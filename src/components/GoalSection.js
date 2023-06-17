import { themeConstant } from '../Theme';
import { Section } from '../components/Section';
import { Tile } from '../components/Tile';
import { Button } from './Button';

export const GoalSection = () => {
    return (
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
    );
};
