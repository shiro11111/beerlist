import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {BeerDetailsService} from './beer-details.service';
import {switchMap} from 'rxjs-compat/operator/switchMap';
import {catchError, map} from 'rxjs/operators';
import {Item} from '../models/item';
import {LoadBeerDetailsFail, LoadBeerDetailsSuccess, LoadBeerDetailsSuccess} from './beer-details.actions';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';

@Injectable()
export class BeerDetailsEffects {

  constructor(
    private actions$: Actions,
    private service: BeerDetailsService
  ) {}

  @Effect() loadDetails$ = this.actions$.pipe(
    ofType('LOAD_BEER_DETAILS'),
    switchMap(() => this.service.loadDetails(id).pipe(
      map((res: Item) => new LoadBeerDetailsSuccess(res)),
      catchError((error: HttpErrorResponse) => of(new LoadBeerDetailsFail(error)))
      ))
    );
}
