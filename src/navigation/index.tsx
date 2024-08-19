import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoanScreen from '../screens/LoanScreen';
import RequestLoanScreen from '../screens/RequestLoanScreen';

// Define the type for your navigation routes
type RouteParamList = {
    RequestLoan: undefined;
    Loans: undefined;
    // Add other routes here
};
const Stack = createNativeStackNavigator<RouteParamList>();
export const RootNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Loans">
            <Stack.Screen
                name="Loans"
                component={LoanScreen}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="RequestLoan"
                component={RequestLoanScreen}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    );
};