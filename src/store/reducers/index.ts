import { combineReducers } from "@reduxjs/toolkit";
import loanReducer from "./loanReducer";

export const rootReducer = combineReducers({loanReducer})