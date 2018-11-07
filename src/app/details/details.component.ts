import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Item} from '../models/item';
import {select, Store} from '@ngrx/store';
import {filter, first, map, takeUntil} from 'rxjs/operators';
import {BeerDetailsState} from './beer-details.reducers';
import {AppState} from '../app.reducers';
import {LoadBeerDetails} from './beer-details.actions';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  details$: Observable<Item>;

  private destroyed$: Subject<boolean> = new Subject();

  constructor(private store: Store<AppState>,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params.pipe(
      first(),
      filter((params: Params) => params && params.id),
      map((params: Params) => params.id),
      takeUntil(this.destroyed$)
    ).subscribe((id: number) => {
      this.store.dispatch(new LoadBeerDetails(id));
    });

    this.details$ = this.store.pipe(
      select('BeerDetailsState'),
      map((state: BeerDetailsState) => state && state.item)
    );
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

}
