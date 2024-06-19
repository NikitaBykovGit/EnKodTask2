import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';

import { CityState, CityStore } from './city.store';
import { ICity } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityQuery extends QueryEntity<CityState> {

  selectIsList$ = this.select(state => state.ui.isList);
  selectCities$ = this.selectAll();

  selectCity(id: number): Observable<ICity> {
    return <Observable<ICity>> this.selectEntity(id);
  }

  constructor(protected store: CityStore) {
    super(store);
  }

}
