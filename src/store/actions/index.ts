import {createAsyncThunk} from '@reduxjs/toolkit';
import gqlClient from '../../utils/gqlClient';
import {queryLoanProducts} from '../../graphql/queries';
import Toast from 'react-native-toast-message';
import {
    isError,
    isLoadingProducts,
    isRequestingLoan,
    isSuccess,
    listLoanProducts
} from '../reducers/loanReducer';
import {API_ENDPOINT} from '../../utils/contants';

/**
 * An anction the enables users queries for loan product
 */
export const getLoanProducts = createAsyncThunk(
    'get/loan/products',
    async (__, thunkApi) => {
        try {
            thunkApi.dispatch(isLoadingProducts(true));
            const response = await gqlClient.query({
                query: queryLoanProducts,
            });
            const {
                data: {loanProducts},
            } = response;
            thunkApi.dispatch(isLoadingProducts(false));
            thunkApi.dispatch(listLoanProducts(loanProducts));
        } catch (error: any) {
            thunkApi.dispatch(isLoadingProducts(false));
            thunkApi.dispatch(isError(error.message));
            Toast.show({
                type: 'error',
                text1: 'Error fetching products',
                text2: error.message,
                position: 'bottom',
            });
        }
    }
);
/**
 * Acction that enables load application
 */

type RequestResponse = {};
type LoanRequestInput = {
    email: string;
    fullName: string;
    loanAmount: string;
    loanPurpose: string;
};
export const requestLoan = createAsyncThunk<RequestResponse, LoanRequestInput>(
    'post/loan/request',
    async (input, thunkApi) => {
        try {
            thunkApi.dispatch(isRequestingLoan(true));
            const response = await fetch(`${API_ENDPOINT}/apply-loan`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    full_name: input.fullName,
                    email: input.email,
                    loan_amount: input.loanAmount,
                    loan_purpose: input.loanPurpose,
                }),
            });
            if (response.status === 201) {
                thunkApi.dispatch(isRequestingLoan(false));
                const {message} = await response.json();
                Toast.show({
                    type: 'success',
                    text1: 'Loan request',
                    text2: message,
                    position: 'bottom',
                });
                thunkApi.dispatch(isSuccess(message));
            }
        } catch (error: any) {
            thunkApi.dispatch(isRequestingLoan(false));
            thunkApi.dispatch(isError(error.message));
            Toast.show({
                type: 'error',
                text1: 'Error While registering user',
                text2: error.message,
                position: 'bottom',
            });
        }
    }
);