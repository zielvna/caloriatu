import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { changeCurrentWeight } from '../slices/settingsSlice';
import { Input } from './Input';

const currentWeightValidationSchema = Yup.object().shape({
    currentWeight: Yup.number()
        .typeError('Must be a number.')
        .min(1, 'Must be larger than 0.')
        .required('This field is required.'),
});

export const LogWeightSection = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const currentWeight = useSelector((state) => state.settings.value.currentWeight);

    const submit = (values) => {
        dispatch(changeCurrentWeight(+values.currentWeight));

        navigation.navigate('Home');
    };

    return (
        <Formik
            innerRef={ref}
            validationSchema={currentWeightValidationSchema}
            initialValues={{
                currentWeight: currentWeight?.toString() ?? '',
            }}
            onSubmit={submit}
        >
            {({ handleChange, handleBlur, values, errors }) => (
                <Input
                    description="Current weight"
                    error={errors.currentWeight}
                    onChangeText={handleChange('currentWeight')}
                    onBlur={handleBlur('currentWeight')}
                    value={values.currentWeight}
                    inputMode="numeric"
                />
            )}
        </Formik>
    );
});
