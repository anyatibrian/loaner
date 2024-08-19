import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector} from "react-redux";
import { rootReducer } from "./reducers";
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({serializableCheck: false}),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()