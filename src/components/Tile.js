import styled from 'styled-components/native';

export const Tile = ({ backgroundColor, colorScheme = 'light', title, description, children }) => {
    return (
        <Container backgroundColor={backgroundColor}>
            <LeftSide>
                <Title colorScheme={colorScheme}>{title}</Title>
                <Description colorScheme={colorScheme}>{description}</Description>
            </LeftSide>
            {children}
        </Container>
    );
};

const Container = styled.View`
    background-color: ${(props) => props.backgroundColor};
    padding: 12px;
    border-radius: 12px;
    margin: 0 0 12px 0;
    flex: 1;
    flex-basis: auto;
    flex-direction: row;
    align-items: center;
`;

const LeftSide = styled.View`
    flex: 1;
    flex-basis: auto;
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
