import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Actions, Effect} from '@ngrx/effects';
import {BeerListService} from './beer-list.service';
import {ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Item} from '../models/item';
import {LoadBeerFail, LoadBeerListFail, LoadBeerListSuccess, LoadBeerSuccess} from './beer.actions';
import {of} from 'rxjs';

@Injectable()
export class BeerListEffects {

  constructor(
    private actions$: Actions,
    private service: BeerListService
  ) {
  }


  @Effect() loadItem$ = this.actions$.pipe(
    ofType('LOAD_BEER'),
    switchMap(() => this.service.loadItem().pipe(
      map((res: Item) => new LoadBeerSuccess(res)),
      catchError((error: HttpErrorResponse) => of(new LoadBeerFail(error)))
    ))
  );

  @Effect() loadList$ = this.actions$.pipe(
    ofType('LOAD_BEERLIST'),
    switchMap(() => this.service.loadList().pipe(
      map((res: Item[]) => new LoadBeerListSuccess(res)),
      catchError((error: HttpErrorResponse) => of(new LoadBeerListFail(error)))
    ))
  );
}
