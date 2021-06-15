import {Dispatch} from "redux";
import axios from "axios";
import {TemplateAction, TemplateActionTypes} from "../../interfaces/template.interface";

export const fetchTemplates = () => {
    return async (dispatch: Dispatch<TemplateAction>) => {
        try {
            dispatch({type: TemplateActionTypes.FETCH_CONTACTS});
            const response = await axios.get('http://localhost:7000/template');
            dispatch({type: TemplateActionTypes.FETCH_CONTACTS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: TemplateActionTypes.FETCH_CONTACTS_ERROR, payload: 'Произошла ошибка при загрузке'})
        }
    }
}
