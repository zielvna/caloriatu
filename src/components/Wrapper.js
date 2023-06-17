import { styled } from 'styled-components/native';

export const Wrapper = ({ children }) => {
    return <WrapperContainer>{children}</WrapperContainer>;
};

const WrapperContainer = styled.View`
    background-color: ${(props) => props.theme.colors.backgroundColor};
    padding: 0 12px;
`;
