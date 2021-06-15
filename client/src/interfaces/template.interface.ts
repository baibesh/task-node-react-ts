interface Params {
    nameParam: string;
    valueParam: string;
}

interface Template {
    name: string;
    path: string;
    params: Params[];
}

export interface TemplateState {
    templates: Template[];
    loading: boolean;
    error: string | null;
}

export enum TemplateActionTypes {
    FETCH_CONTACTS = 'FETCH_TODOS',
    FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
    FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR'
}

interface FetchTemplateAction {
    type: TemplateActionTypes.FETCH_CONTACTS
}

interface FetchTemplateSuccessAction {
    type: TemplateActionTypes.FETCH_CONTACTS_SUCCESS,
    payload: Template[];
}

interface FetchTemplateErrorAction {
    type: TemplateActionTypes.FETCH_CONTACTS_ERROR,
    payload: string;
}

export type TemplateAction = FetchTemplateAction | FetchTemplateSuccessAction | FetchTemplateErrorAction;

