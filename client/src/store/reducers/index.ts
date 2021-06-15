import {combineReducers} from "redux";
import {contactReducer} from "./contactReducer";
import {templateReducer} from "./templateReducer";

export const rootReducer = combineReducers({
    contact: contactReducer,
    template: templateReducer
})

export type RootState = ReturnType<typeof rootReducer>;
