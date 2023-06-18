import { styled } from 'styled-components/native';

export const Field = ({ description, unit, error, ...props }) => {
    return (
        <Container>
            <Group>
                <Description>{`${description}:`}</Description>
                <Input {...props} />
                {unit && <Unit>{unit}</Unit>}
            </Group>
            {error && <Error>{error}</Error>}
        </Container>
    );
};

const Container = styled.View`
    margin: 0 0 12px 0;
`;

const Group = styled.View`
    flex-direction: row;
    align-items: center;
`;

const Input = styled.TextInput`
    background-color: ${(props) => props.theme.colors.firstGray};
    padding: 4px;
    flex-grow: 1;
    border-radius: 12px;
`;

const Description = styled.Text`
    font-family: ${(props) => props.theme.fonts.bold};
    color: ${(props) => props.theme.colors.contrastColor};
    font-size: 16px;
    margin: 0 12px 0 0;
`;

const Unit = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.secondGray};
    font-size: 16px;
    margin: 0 0 0 12px;
`;

const Error = styled.Text`
    color: ${(props) => props.theme.colors.errorColor};
`;
