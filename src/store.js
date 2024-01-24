import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./providers/userProvider/loginReducer";

export const store = configureStore({
    reducer: {
        login: loginReducer,
    },
});