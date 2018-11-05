import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Actions, Effect } from '@ngrx/effects';
import {ListService} from './list.service';
import { ofType } from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class PeopleListEffects {
  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private service: ListService
  ) { }


  @Effect() loadItem$ = this.actions$.pipe(
    ofType('LOAD_LIST'),
    switchMap(() => this.service.loadItem().pipe(
      map(())
    ))
  )
