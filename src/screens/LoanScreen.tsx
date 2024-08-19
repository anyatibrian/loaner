import {
    ActivityIndicator,
    useWindowDimensions,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {LLoanCard} from '../components/LLoanCard';
import {useEffect} from 'react';
import {useAppDispatch} from '../store';
import {getLoanProducts} from '../store/actions';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import LoadSVG from '../assets/Loan.svg';
import {LButton} from '../components/LButton';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Define the type for your navigation routes
export type RouteParamList = {
    RequestLoan: undefined;
    Loans: undefined;
};
//Define types for our loan screen
type LoanTypes = {
    navigation: NativeStackNavigationProp<RouteParamList, 'Loans'>;
    route: any;
};
const LoanScreen = ({navigation, route}: LoanTypes) => {
    const {height} = useWindowDimensions();

    const {isLoadingProducts, loanProducts} = useSelector(
        (state: RootState) => state.loanReducer
    );

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getLoanProducts());
    }, []);

    return (
        <View style={styles.contianer}>
            <View style={styles.introContainer}>
                <View style={{width: 400, marginTop: 25}}>
                    <Text
                        style={{
                            ...styles.introText,
                            fontWeight: 'condensedBold',
                        }}>
                        Loan Application Dashboard
                    </Text>
                    <Text
                        style={{
                            ...styles.introText,
                            fontWeight: 'light',
                            fontSize: 18,
                            maxWidth: 300,
                        }}>
                        Quick and convenient unsecured loans.
                    </Text>
                </View>
                <View style={{alignSelf: 'center'}}>
                    <LoadSVG />
                </View>
            </View>
            <View style={{...styles.loanListContainer, height: height * 0.1}}>
                {loanProducts.length > 0 ? (
                    <FlatList
                        data={loanProducts}
                        numColumns={2}
                        renderItem={({item}) => (
                            <LLoanCard
                                key={Math.random() * item.id}
                                name={item.name}
                                maxLoanAmount={`$${item.maximumAmount}`}
                                interestRate={`${item.interestRate}%`}
                            />
                        )}
                    />
                ) : (
                    <ActivityIndicator size={'large'} color={'#30C2E3'} />
                )}
            </View>
            <View style={{marginHorizontal: 15}}>
                <LButton
                    title="apply for loan"
                    textTransfrom="uppercase"
                    viewStyle={styles.ButtonViewStyle}
                    styles={styles.buttonStyle}
                    isLoading={false}
                    onPress={() => navigation.navigate('RequestLoan')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
    },
    loanListContainer: {
        flex: 1,
    },
    introContainer: {
        marginHorizontal: 15,
        flex: 1,
    },
    introText: {
        fontSize: 25,
        color: '#000000',
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
export default LoanScreen;