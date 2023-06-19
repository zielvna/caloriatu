import { Field } from 'formik';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

export const Radio = ({ name, description, items }) => {
    return (
        <>
            <Description>{`${description}:`}</Description>
            <Field name={name}>
                {({ field: { value }, form: { setFieldValue } }) =>
                    items.map((item, i) => (
                        <TouchableWithoutFeedback key={i} onPress={() => setFieldValue(name, i)}>
                            <CheckboxContainer>
                                <Checkbox>
                                    <Selected checked={value === i} />
                                </Checkbox>
                                <ItemName>{item}</ItemName>
                            </CheckboxContainer>
                        </TouchableWithoutFeedback>
                    ))
                }
            </Field>
        </>
    );
};

const Description = styled.Text`
    font-family: ${(props) => props.theme.fonts.bold};
    color: ${(props) => props.theme.colors.contrastColor};
    font-size: 16px;
    margin: 0 0 6px 0;
`;

const CheckboxContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 0 0 6px 0;
`;

const ItemName = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.contrastColor};
    margin: 0 0 0 6px;
`;

const Checkbox = styled.View`
    background-color: ${(props) => props.theme.colors.firstGray};
    width: 32px;
    height: 32px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
`;

const Selected = styled.View`
    background-color: ${(props) => props.theme.colors.primaryColor};
    width: 16px;
    height: 16px;
    border-radius: 8px;
    ${(props) => !props.checked && 'display: none'}
`;
