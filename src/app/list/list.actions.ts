import {Action} from '@ngrx/store';
import {Item} from '../models/item';
import {HttpErrorResponse} from '@angular/common/http';


export const LOAD_LIST = 'LOAD_LIST';
export const  LOAD_LIST_SUCCESS = 'LOAD_LIST_SUCCESS';
export const LOAD_LIST_FAIL = 'LOAD_LIST_FAIL';



export class LoadList implements Action {
  readonly type = 'LOAD_LIST';
}

export class LoadListSuccess implements Action {
  readonly type = 'LOAD_LIST_SUCCESS';

  constructor(public payload: Item[]) {}
}

export class LoadListFail implements Action {
  readonly type = 'LOAD_LIST_TYPE';

  constructor(public payload: HttpErrorResponse) {}
}


export type ListActions = LoadList | LoadListSuccess | LoadListFail;
