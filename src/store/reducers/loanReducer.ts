import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState: {
    loanProducts: Array<LoanProduct>;
    isLoadingProducts: boolean;
    sucessMessage: string | null;
    errorMessage: string | null;
    isRequestingLoan: boolean;
} = {
    loanProducts: [],
    isLoadingProducts: false,
    sucessMessage: null,
    errorMessage: null,
    isRequestingLoan: false,
};
const loanSlice  =  createSlice({
    name:'loan/slice',
    initialState,
    reducers:{
         listLoanProducts: (state, action: PayloadAction<any>) => {
            state.loanProducts = action.payload;
        },
        isLoadingProducts: (state, action: PayloadAction<any>) => {
            state.isLoadingProducts = action.payload;
        },
        applyForLoan: (state, action: PayloadAction<any>) => {},
        isError: (state, action: PayloadAction<any>) => {
            state.errorMessage = action.payload;
        },
        isSuccess: (state, action: PayloadAction<any>) => {
            console.log(action.payload)
            state.sucessMessage = action.payload;
        },
        isRequestingLoan: (state, action: PayloadAction<any>) => {
            state.isRequestingLoan = action.payload;
        },
    }
})
export const {isLoadingProducts, isRequestingLoan, isError, isSuccess, listLoanProducts}  = loanSlice.actions
export default loanSlice.reducer