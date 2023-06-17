import { styled } from 'styled-components/native';

export const Section = ({ title, stats, children }) => {
    return (
        <>
            <Header>
                <Title>{title}</Title>
                <Stats>{stats}</Stats>
            </Header>
            {children}
        </>
    );
};

const Header = styled.View`
    height: 40px;
    flex: 1;
    flex-basis: auto;
    flex-direction: row;
    align-items: center;
`;

const Title = styled.Text`
    color: ${(props) => props.theme.colors.contrastColor};
    font-family: ${(props) => props.theme.fonts.bold};
    font-size: 20px;
    margin: 0 12px 0 0;
`;

const Stats = styled.Text`
    color: ${(props) => props.theme.colors.secondGray};
    font-family: ${(props) => props.theme.fonts.regular};
`;
