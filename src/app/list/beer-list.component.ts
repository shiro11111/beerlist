import {Component, OnInit} from '@angular/core';
import {Item} from '../models/item';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../app.reducers';
import {select} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {BeerState} from './beer-list.reducers';
import {LoadBeerList} from './beer.actions';

@Component({
  selector: 'app-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  beer$: Observable<Item>;
  list$: Observable<Item[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadBeerList());

    this.beer$ = this.store.pipe(
      select('beerState'),
      map((state: BeerState) => state && state.item)
    );

    this.list$ = this.store.pipe(
      select('beerState'),
      map((state: BeerState) => state && state.list)
    );
  }

}
