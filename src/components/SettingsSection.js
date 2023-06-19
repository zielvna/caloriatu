import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { changeSettings } from '../slices/settingsSlice';
import { Input } from './Input';
import { Radio } from './Radio';

const settingsValidationSchema = Yup.object().shape({
    gender: Yup.number(),
    age: Yup.number()
        .typeError('Must be a number.')
        .integer('Must be an integer.')
        .min(1, 'Must be larger than 0.')
        .required('This field is required.'),
    height: Yup.number()
        .typeError('Must be a number.')
        .integer('Must be an integer.')
        .min(1, 'Must be larger than 0.')
        .required('This field is required.'),
    currentWeight: Yup.number()
        .typeError('Must be a number.')
        .min(1, 'Must be larger than 0.')
        .required('This field is required.'),
    goalWeight: Yup.number()
        .typeError('Must be a number.')
        .min(1, 'Must be larger than 0.')
        .required('This field is required.'),
    weeklyWeightLoseGoal: Yup.number()
        .typeError('Must be a number.')
        .min(0, 'Must be larger than 0 and lower than 1.')
        .max(1, 'Must be larger than 0 and lower than 1.'),
    activity: Yup.number(),
});

export const SettingsSection = forwardRef((props, ref) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const settings = useSelector((state) => state.settings.value);

    const submit = (values) => {
        const newValues = {
            gender: values.gender,
            age: +values.age,
            height: +values.height,
            currentWeight: +values.currentWeight,
            goalWeight: +values.goalWeight,
            weeklyWeightLoseGoal: +values.weeklyWeightLoseGoal,
            activity: values.activity,
        };

        dispatch(changeSettings(newValues));
        navigation.navigate('Home');
    };

    return (
        <Formik
            innerRef={ref}
            validationSchema={settingsValidationSchema}
            initialValues={{
                gender: settings.gender ?? 0,
                age: settings.age.toString() ?? '',
                height: settings.height.toString() ?? '',
                currentWeight: settings.currentWeight.toString() ?? '',
                goalWeight: settings.goalWeight.toString() ?? '',
                weeklyWeightLoseGoal: settings.weeklyWeightLoseGoal.toString() ?? '',
                activity: settings.activity ?? 0,
            }}
            onSubmit={submit}
        >
            {({ handleChange, handleBlur, values, errors }) => (
                <>
                    <Radio name="gender" description="Gender" items={['Male', 'Female']} />
                    <Input
                        description="Age"
                        unit="years old"
                        error={errors.age}
                        onChangeText={handleChange('age')}
                        onBlur={handleBlur('age')}
                        value={values.age}
                        inputMode="numeric"
                    />
                    <Input
                        description="Height"
                        unit="cm"
                        error={errors.height}
                        onChangeText={handleChange('height')}
                        onBlur={handleBlur('height')}
                        value={values.height}
                        inputMode="numeric"
                    />
                    <Input
                        description="Current weight"
                        unit="kg"
                        error={errors.currentWeight}
                        onChangeText={handleChange('currentWeight')}
                        onBlur={handleBlur('currentWeight')}
                        value={values.currentWeight}
                        inputMode="numeric"
                    />
                    <Input
                        description="Goal weight"
                        unit="kg"
                        error={errors.goalWeight}
                        onChangeText={handleChange('goalWeight')}
                        onBlur={handleBlur('goalWeight')}
                        value={values.goalWeight}
                        inputMode="numeric"
                    />
                    <Input
                        description="Weekly weight lose goal"
                        unit="kg"
                        error={errors.weeklyWeightLoseGoal}
                        onChangeText={handleChange('weeklyWeightLoseGoal')}
                        onBlur={handleBlur('weeklyWeightLoseGoal')}
                        value={values.weeklyWeightLoseGoal}
                        inputMode="numeric"
                    />
                    <Radio
                        name="activity"
                        description="Activity"
                        items={[
                            'Little or no exercise',
                            'Light exercise',
                            'Moderate exercise',
                            'Hard exercise',
                            'Very hard exercise',
                        ]}
                    />
                </>
            )}
        </Formik>
    );
});
