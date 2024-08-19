import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {LButton} from '../components/LButton';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootState, useAppDispatch, useAppSelector} from '../store';
import {requestLoan} from '../store/actions';
import {useEffect} from 'react';
import {isSuccess} from '../store/reducers/loanReducer';
// Define the type for route params
type RouteParamList = {
    RequestLoan: undefined;
    Loans: undefined;
};
//define type for Request loan screen
type RequestLoanTypes = {
    navigation: NativeStackNavigationProp<RouteParamList, 'Loans'>;
    route: any;
};

const RequestLoanScreen = ({navigation, route}: RequestLoanTypes) => {
    const {isRequestingLoan, sucessMessage, errorMessage} = useAppSelector(
        (state: RootState) => state.loanReducer
    );

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (sucessMessage) {
            dispatch(isSuccess(null));
            //redirect to the loan screen after successful loan request
            navigation.navigate('Loans');
        }
    }, [sucessMessage, errorMessage]);

    //validation schema for loan request form fields
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        fullName: Yup.string()
            .min(3, 'Full Name must be at least 3 characters')
            .required('Full Name is required'),
        loanPurpose: Yup.string()
            .min(10, 'Loan Purpose must be at least 10 characters')
            .required('Loan Purpose is required'),
        loanAmount: Yup.number()
            .typeError('Loan Amount must be a number')
            .min(1, 'Loan Amount must be greater than zero')
            .required('Loan Amount is required'),
    });

    return (
        <View style={styles.parentContainer}>
            <Text style={{...styles.loanHeader, marginHorizontal: 17}}>
                {' '}
                Apply for a loan
            </Text>
            <Text style={{...styles.textInputLabel, marginHorizontal: 17}}>
                After applying for aloan we shall make sure we respond and
                process it in the next 24hrs
            </Text>
            <Formik
                initialValues={{
                    email: '',
                    fullName: '',
                    loanPurpose: '',
                    loanAmount: '',
                }}
                validationSchema={validationSchema}
                onSubmit={({fullName, email, loanAmount, loanPurpose}) => {
                    dispatch(
                        requestLoan({fullName, email, loanAmount, loanPurpose})
                    );
                }}>
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                }) => (
                    <View style={styles.container}>
                        <View>
                            <Text style={{...styles.textInputLabel}}>
                                Full Name
                            </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Full Name"
                                onChangeText={handleChange('fullName')}
                                onBlur={handleBlur('fullName')}
                                value={values.fullName}
                            />
                            {touched.fullName && errors.fullName && (
                                <Text style={styles.errorText}>
                                    {errors.fullName}
                                </Text>
                            )}
                        </View>
                        <View>
                            <Text style={styles.textInputLabel}>Email</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="yourname@example.com"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            {touched.email && errors.email && (
                                <Text style={styles.errorText}>
                                    {errors.email}
                                </Text>
                            )}
                        </View>
                        <View>
                            <Text style={styles.textInputLabel}>
                                Loan Amount
                            </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="UGX"
                                onChangeText={handleChange('loanAmount')}
                                onBlur={handleBlur('loanAmount')}
                                value={values.loanAmount}
                                keyboardType="numeric"
                            />
                            {touched.loanAmount && errors.loanAmount && (
                                <Text style={styles.errorText}>
                                    {errors.loanAmount}
                                </Text>
                            )}
                        </View>
                        <View>
                            <Text style={styles.textInputLabel}>
                                Loan Purpose
                            </Text>
                            <TextInput
                                style={[styles.input, styles.textArea]}
                                placeholder="Loan Purpose"
                                onChangeText={handleChange('loanPurpose')}
                                onBlur={handleBlur('loanPurpose')}
                                value={values.loanPurpose}
                                multiline={true}
                                numberOfLines={4}
                            />
                            {touched.loanPurpose && errors.loanPurpose && (
                                <Text style={styles.errorText}>
                                    {errors.loanPurpose}
                                </Text>
                            )}
                        </View>
                        <LButton
                            title="submit"
                            viewStyle={styles.ButtonViewStyle}
                            styles={styles.buttonStyle}
                            isLoading={isRequestingLoan}
                            textTransfrom="uppercase"
                            onPress={handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
};
export default RequestLoanScreen;
const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
    },
    loanHeader: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000',
        marginVertical: 20,
    },
    container: {
        padding: 20,
        flex: 1,
    },
    textInputLabel: {
        color: '#000000',
        lineHeight: 19,
    },
    input: {
        borderWidth: 1,
        borderColor: '#B1B1B1',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    ButtonViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonStyle: {
        backgroundColor: '#30C2E3',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 12,
        color: '#FFFFFF',
    },
});