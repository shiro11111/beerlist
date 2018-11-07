import {Injectable} from '@angular/core';
import {root} from 'rxjs/internal-compatibility';
import {Observable} from 'rxjs';
import {Item} from '../models/item';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: root
})

export class BeerDetailsService {
  constructor(private http: HttpClient) {}

  loadDetails(id: number): Observable<Item> {
    return this.http.get(` https://api.punkapi.com/v2/beers/${id}`);
  }
}
