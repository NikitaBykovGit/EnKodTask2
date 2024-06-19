import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';

import { CityService } from './state/city.service';

@Component({
  selector: 'app-root',
  template: `
    <header><h1>header</h1></header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'EnKodTask2';

  constructor(
    private cityService: CityService
  ) {
  }

  ngOnInit() {
    this.cityService.fetchCitys()
  }
}
