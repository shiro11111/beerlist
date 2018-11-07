import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {Item} from '../models/item';


export const LOAD_BEER_DETAILS = 'LOAD_BEER_DETAILS';
export const LOAD_BEER_DETAILS_SUCCESS = 'LOAD_BEER_DETAILS_SUCCESS';
export const LOAD_BEER_DETAILS_FAIL = 'LOAD_BEER_DETAILS_FAIL';


export class LoadBeerDetails implements Action {
  readonly type = LOAD_BEER_DETAILS;

  constructor(public payload: number) {}
}


export class LoadBeerDetailsSuccess implements Action {
  readonly type = LOAD_BEER_DETAILS_SUCCESS;

  constructor(public payload: Item) {}
}


export class LoadBeerDetailsFail implements Action {
  readonly type = LOAD_BEER_DETAILS_FAIL;

  constructor(public payload:  HttpErrorResponse ) {}
}

export type BeerDetailsActions = LoadBeerDetails | LoadBeerDetailsSuccess | LoadBeerDetailsFail;
