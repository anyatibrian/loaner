import {gql} from '@apollo/client';

export const queryLoanProducts = gql`
    query {
        loanProducts {
            id
            maximumAmount
            interestRate
            name
        }
    }
`;