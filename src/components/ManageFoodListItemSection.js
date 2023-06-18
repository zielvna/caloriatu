import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { forwardRef } from 'react';
import uuid from 'react-native-uuid';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { add, update } from '../slices/foodListSlice';
import { Field } from './Field';

const listFoodValidationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required.'),
    energy: Yup.number()
        .typeError('Must be a number.')
        .integer('Must be an integer.')
        .min(1, 'Must be larger than 0.')
        .required('This field is required.'),
    portionSize: Yup.number()
        .typeError('Must be a number.')
        .integer('Must be an integer.')
        .min(1, 'Must be larger than 0.')
        .required('This field is required.'),
});

export const ManageFoodListItemSection = forwardRef(({ foodListItem }, ref) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const submit = (values) => {
        const listFood = {
            id: foodListItem?.id ?? uuid.v4(),
            name: values.name,
            energy: +values.energy,
            portionSize: +values.portionSize,
        };

        if (foodListItem?.id) {
            dispatch(update(listFood));
        } else {
            dispatch(add(listFood));
        }

        navigation.navigate('FoodList');
    };

    return (
        <>
            <Formik
                innerRef={ref}
                validationSchema={listFoodValidationSchema}
                initialValues={{
                    name: foodListItem?.name || '',
                    energy: foodListItem?.energy.toString() || '',
                    portionSize: foodListItem?.portionSize.toString() || '',
                }}
                onSubmit={submit}
            >
                {({ handleChange, handleBlur, values, errors }) => (
                    <>
                        <Field
                            description="Name"
                            error={errors.name}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />
                        <Field
                            description="Energy"
                            unit="kcal/100 g"
                            error={errors.energy}
                            onChangeText={handleChange('energy')}
                            onBlur={handleBlur('energy')}
                            value={values.energy}
                            inputMode="numeric"
                        />
                        <Field
                            description="Portion size"
                            unit="g"
                            error={errors.portionSize}
                            onChangeText={handleChange('portionSize')}
                            onBlur={handleBlur('portionSize')}
                            value={values.portionSize}
                            inputMode="numeric"
                        />
                    </>
                )}
            </Formik>
        </>
    );
});
