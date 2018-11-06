import {Action} from '@ngrx/store';
import {Item} from '../models/item';
import {HttpErrorResponse} from '@angular/common/http';


export const LOAD_BEER = 'LOAD_BEER';
export const LOAD_BEER_SUCCESS = 'LOAD_BEER_SUCCESS';
export const LOAD_BEER_FAIL = 'LOAD_BEER_FAIL';

export const LOAD_BEERLIST = 'LOAD_BEERLIST';
export const LOAD_BEERLIST_SUCCESS = 'LOAD_BEERLIST_SUCCESS';
export const LOAD_BEERLIST_FAIL = 'LOAD_BEERLIST_FAIL';





export class LoadBeer implements Action {
  readonly type = 'LOAD_BEER';
}

export class LoadBeerSuccess implements Action {
  readonly type = 'LOAD_BEER_SUCCESS';

  constructor(public payload: Item) {}
}

export class LoadBeerFail implements Action {
  readonly type = 'LOAD_BEER_FAIL';

  constructor(public payload: HttpErrorResponse) {}
}

export class LoadBeerList implements Action {
  readonly type = 'LOAD_BEERLIST';
}

export class LoadBeerListSuccess implements Action {
  readonly type = 'LOAD_BEERLIST_SUCCESS';

  constructor(public payload: Item[]) {}
}

export class LoadBeerListFail implements Action {
  readonly type = 'LOAD_BEERLIST_FAIL';
  constructor(public payload: HttpErrorResponse) {}
}




export type BeerActions = LoadBeer | LoadBeerSuccess | LoadBeerFail |
            LoadBeerList |  LoadBeerListSuccess | LoadBeerListFail;
