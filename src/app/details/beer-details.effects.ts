import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {BeerDetailsService} from './beer-details.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Item} from '../models/item';
import {LoadBeerDetails, LoadBeerDetailsFail, LoadBeerDetailsSuccess} from './beer-details.actions';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';

@Injectable()
export class BeerDetailsEffects {

  constructor(
    private actions$: Actions,
    private service: BeerDetailsService
  ) {
  }

  @Effect() loadDetails$ = this.actions$.pipe(
    ofType('LOAD_BEER_DETAILS'),
    map((action: LoadBeerDetails) => action.payload as number),
    switchMap((id: number) => this.service.loadDetails(id).pipe(
      map((res: Item) => new LoadBeerDetailsSuccess(res)),
      catchError((error: HttpErrorResponse) => of(new LoadBeerDetailsFail(error)))
    ))
  );
}
