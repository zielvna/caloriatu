import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { forwardRef } from 'react';
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { themeConstant } from '../Theme';
import { addFood, editFood } from '../slices/dayListSlice';
import { Field } from './Field';
import { Tile } from './Tile';

const foodValidationSchema = Yup.object().shape({
    portions: Yup.number()
        .typeError('Must be a number.')
        .integer('Must be an integer.')
        .min(1, 'Must be larger than 0.')
        .required('This field is required.'),
});

export const ManageMealFoodSection = forwardRef(({ food, action }, ref) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { date, meal } = useSelector((state) => state.select.value);

    const submit = (values) => {
        const newFood = {
            id: action === 'add' ? uuid.v4() : food.id,
            name: food.name,
            energy: food.energy,
            portionSize: food.portionSize,
            portions: +values.portions,
        };

        if (action === 'add') {
            dispatch(addFood({ date, meal, food: newFood }));
        } else {
            dispatch(editFood({ date, meal, food: newFood }));
        }

        navigation.navigate('Meal');
    };

    return (
        <>
            <Tile
                backgroundColor={themeConstant.colors.primaryColor}
                title={food.name}
                description={`${food.energy} kcal/100 g - ${food.portionSize} g/1 portion`}
            />
            <Formik
                innerRef={ref}
                validationSchema={foodValidationSchema}
                initialValues={{
                    portions: food?.portions?.toString(),
                }}
                onSubmit={submit}
            >
                {({ handleChange, handleBlur, values, errors }) => (
                    <Field
                        description="Portions"
                        error={errors.portions}
                        onChangeText={handleChange('portions')}
                        onBlur={handleBlur('portions')}
                        value={values.portions}
                        inputMode="numeric"
                    />
                )}
            </Formik>
        </>
    );
});
