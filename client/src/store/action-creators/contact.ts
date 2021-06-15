import {Dispatch} from "redux";
import {ContactAction, ContactActionTypes} from "../../interfaces/contact.interface";
import axios from "axios";

export const fetchContacts = () => {
    return async (dispatch: Dispatch<ContactAction>) => {
        try {
            dispatch({type: ContactActionTypes.FETCH_CONTACTS});
            const response = await axios.get('http://localhost:7000/contact');
            dispatch({type: ContactActionTypes.FETCH_CONTACTS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: ContactActionTypes.FETCH_CONTACTS_ERROR, payload: 'Произошла ошибка при загрузке'})
        }
    }
}
