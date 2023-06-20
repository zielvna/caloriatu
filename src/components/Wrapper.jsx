import styled from 'styled-components/native';

export const Wrapper = ({ children }) => <WrapperContainier>{children}</WrapperContainier>;

const WrapperContainier = styled.ScrollView`
    flex-grow: 1;
    padding: 0 12px;
`;
