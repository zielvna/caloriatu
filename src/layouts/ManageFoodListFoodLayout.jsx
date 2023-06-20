import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { forwardRef } from 'react';
import uuid from 'react-native-uuid';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Input } from '../components/Input';
import { add, edit } from '../slices/foodListSlice';

const foodValidationSchema = Yup.object().shape({
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

export const ManageFoodListFoodLayout = forwardRef(({ food, action }, ref) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const submit = (values) => {
        const newFood = {
            id: action === 'add' ? uuid.v4() : food.id,
            name: values.name,
            energy: +values.energy,
            portionSize: +values.portionSize,
        };

        if (action === 'add') {
            dispatch(add(newFood));
        } else {
            dispatch(edit(newFood));
        }

        navigation.goBack();
    };

    return (
        <Formik
            innerRef={ref}
            validationSchema={foodValidationSchema}
            initialValues={{
                name: food?.name,
                energy: food?.energy?.toString(),
                portionSize: food?.portionSize?.toString(),
            }}
            onSubmit={submit}
        >
            {({ handleChange, handleBlur, values, errors }) => (
                <>
                    <Input
                        description="Name"
                        error={errors.name}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                    />
                    <Input
                        description="Energy"
                        unit="kcal/100 g"
                        error={errors.energy}
                        onChangeText={handleChange('energy')}
                        onBlur={handleBlur('energy')}
                        value={values.energy}
                        inputMode="numeric"
                    />
                    <Input
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
    );
});
