import styled from 'styled-components/native';

export const Tile = ({ backgroundColor, colorScheme = 'light', title, description, isHorizontal = true, children }) => {
    return (
        <Container backgroundColor={backgroundColor} isHorizontal={isHorizontal}>
            <LeftSide isHorizontal={isHorizontal}>
                <Title colorScheme={colorScheme}>{title}</Title>
                <Description colorScheme={colorScheme}>{description}</Description>
            </LeftSide>
            {children}
        </Container>
    );
};

const Container = styled.View`
    background-color: ${(props) => props.backgroundColor};
    flex-direction: ${(props) => (props.isHorizontal ? 'row' : 'column')};
    padding: 12px;
    border-radius: 12px;
    margin: 0 0 12px 0;
    flex: 1;
    flex-basis: auto;
    ${(props) => props.isHorizontal && 'align-items: center;'}
`;

const LeftSide = styled.View`
    flex: 1;
    flex-basis: auto;
    ${(props) => !props.isHorizontal && 'margin: 0 0 12px 0'};
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.bold};
    color: ${(props) =>
        props.colorScheme === 'light' ? props.theme.colors.backgroundColor : props.theme.colors.contrastColor};
    font-size: 20px;
`;

const Description = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) =>
        props.colorScheme === 'light' ? props.theme.colors.backgroundColor : props.theme.colors.secondGray};
`;
