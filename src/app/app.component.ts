import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';

import { CityService } from './state/city.service';

@Component({
  selector: 'app-root',
  template: `
    <header><h1>{{name}}</h1></header>
    <div class="app__container">
      <router-outlet (activate)="getTitle($event)"></router-outlet>
    </div>
  `
})
export class AppComponent {

  title:string;
  name:string;

  constructor(
    private cityService: CityService,
    private cdref: ChangeDetectorRef,
  ) {
    this.title = 'EnKodTask2';
    this.name = '';
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ngOnInit() {
    this.cityService.fetchCitys()
  }

  getTitle(elementRef:any) {
    elementRef.titleEvent.subscribe((event: string) => {
        this.name = event;
    })
  }
}
