import {TemplateState, TemplateAction, TemplateActionTypes} from "../../interfaces/template.interface";

const initialState: TemplateState = {
    templates: [],
    error: null,
    loading: false,
}

export const templateReducer = (state = initialState, action: TemplateAction): TemplateState => {
    switch (action.type) {
        case TemplateActionTypes.FETCH_CONTACTS:
            return { ...state, loading: true }
        case TemplateActionTypes.FETCH_CONTACTS_SUCCESS:
            return { ...state, loading: false, templates: action.payload}
        case TemplateActionTypes.FETCH_CONTACTS_ERROR:
            return { ...state, loading: false, error: action.payload}
        default:
            return state;
    }
}
