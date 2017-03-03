import { ActionReducer, Action } from '@ngrx/store';

export const SETDATE = 'SETDATE';

export const datePickerReducer: ActionReducer<Date> = (state : Date=new Date(2000,0,1), action: Action) => {

    switch (action.type) {
        case SETDATE:
            return action.payload;

        default:
            return state;
    }
}