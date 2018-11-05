import * as ListActions from './list.actions';
import {Item} from '../models/item';


export interface ListState {
  list: Item[];
}

const initialState: ListState = {
  list: []
}

export function listReducer(state = initialState, action: ListActions.ListActions) {
  switch (action.type) {
    case ListActions.LOAD_LIST:
    return {
      ...state
    };

    case ListActions.LOAD_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload
      };

    case ListActions.LOAD_LIST_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
