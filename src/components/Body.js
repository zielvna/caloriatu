import styled from 'styled-components/native';

export const Body = ({ children }) => {
    return <ScrollViewContainer>{children}</ScrollViewContainer>;
};

const ScrollViewContainer = styled.ScrollView`
    flex-grow: 1;
    padding: 0 12px;
`;
