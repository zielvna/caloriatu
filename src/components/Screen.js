import styled from 'styled-components/native';

export const Screen = ({ children }) => {
    return <Container>{children}</Container>;
};

const Container = styled.View`
    background-color: ${(props) => props.theme.colors.backgroundColor};
    height: 100%;
`;
