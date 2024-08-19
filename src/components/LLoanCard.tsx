import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {LButton} from './LButton';
import ChevronLeft from '../assets/ChevronLeft.svg';
type LLoanCard = {
    name?: string;
    interestRate?: string;
    maxLoanAmount?: string;
};
export const LLoanCard = ({name, interestRate, maxLoanAmount}: LLoanCard) => {
    const {height, width} = useWindowDimensions();
    return (
        <View style={{...styles.containter, width: width * 0.45}}>
            <View>
                <Text style={styles.loanName}>{name}</Text>
                <Text style={styles.loanMaxAmount}>Maximum amount:</Text>
                <Text style={styles.loanAmount}>{maxLoanAmount}</Text>
            </View>
            <View style={styles.cardFooter}>
                <Text style={styles.interestText}>
                    Interest: {interestRate}
                </Text>
                <LButton
                    title="Learn More"
                    textColor="#30C2E3"
                    styles={styles.btnStyle}
                    iconStyle={styles.iconStyle}
                    icon={
                        <View>
                            <Text>
                                <ChevronLeft />
                            </Text>
                        </View>
                    }
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    containter: {
        flexDirection: 'column',
        padding: 15,
        borderWidth: 2,
        borderColor: '#D9D9D9',
        margin: 10,
        borderRadius: 10,
    },
    loanName: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '700',
    },
    loanMaxAmount: {
        color: '#000000',
        fontWeight: '500',
        height: 17,
        fontSize: 14,
    },
    loanAmount: {
        color: '#30C2E3',
        fontSize: 18,
        fontWeight: '700',
    },
    interestText: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '400',
    },
    buttonView: {},
    btnStyle: {
        borderColor: '#30C2E3',
        borderWidth: 2,
        borderRadius: 50,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginHorizontal: 5,
        maxWidth: 110,
        marginLeft: 0,
        marginVertical: 5,
    },
    cardFooter: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    iconStyle: {
        marginTop: 5,
        marginLeft: 5,
    },
});
