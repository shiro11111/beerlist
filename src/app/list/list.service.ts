import {Injectable} from '@angular/core';
import {root} from 'rxjs/internal-compatibility';
import {Observable} from 'rxjs';
import {Item} from '../models/item';
import {filter, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: root
})

export class ListService {

  constructor(private http: HttpClient) {

  }

  loadItem(): Observable<Item> {
    return this.http.get('https://api.punkapi.com/v2/beers/1').pipe(
      filter((list: Item[]) => list && list.length > 0),
      map((list: Item[]) => list[0])
    );
  }
}
