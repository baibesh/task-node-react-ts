interface Contact {
    id: number;
    name: string;
}

export interface ContactState {
    contacts: Contact[];
    loading: boolean;
    error: string | null;
}

export enum ContactActionTypes {
    FETCH_CONTACTS = 'FETCH_TODOS',
    FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
    FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR'
}

interface FetchContactAction {
    type: ContactActionTypes.FETCH_CONTACTS
}

interface FetchContactSuccessAction {
    type: ContactActionTypes.FETCH_CONTACTS_SUCCESS,
    payload: Contact[];
}

interface FetchContactErrorAction {
    type: ContactActionTypes.FETCH_CONTACTS_ERROR,
    payload: string;
}

export type ContactAction = FetchContactAction | FetchContactSuccessAction | FetchContactErrorAction;

