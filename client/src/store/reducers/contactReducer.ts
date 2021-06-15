import {ContactAction, ContactActionTypes, ContactState} from "../../interfaces/contact.interface";

const initialState: ContactState = {
    contacts: [],
    error: null,
    loading: false,
}

export const contactReducer = (state = initialState, action: ContactAction): ContactState => {
    switch (action.type) {
        case ContactActionTypes.FETCH_CONTACTS:
            return { ...state, loading: true }
        case ContactActionTypes.FETCH_CONTACTS_SUCCESS:
            return { ...state, loading: false, contacts: action.payload}
        case ContactActionTypes.FETCH_CONTACTS_ERROR:
            return { ...state, loading: false, error: action.payload}
        default:
            return state;
    }
}
