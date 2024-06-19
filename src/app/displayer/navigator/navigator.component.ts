import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CityService } from '../../state/city.service';
import { CityQuery } from '../../state/city.query';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.css'
})
export class NavigatorComponent {
  isList$: Observable<boolean>;

  constructor(
    private cityService: CityService,
    private cityQuery: CityQuery,
  ) {}

  ngOnInit() {
    this.isList$ = this.cityQuery.selectIsList$;
  }

  setListDisplay() {
    this.cityService.updateDisplay(true);
  }

  setTileDisplay() {
    this.cityService.updateDisplay(false);
  }
}
