import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { CityService } from '../../state/city.service';
import { CityQuery } from '../../state/city.query';
import { ICity } from '../../models/city';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})

export class TileComponent {
  cities$: Observable<ICity[]>;

  @Output() titleEvent = new EventEmitter<string>();

  constructor(
    private cityService: CityService,
    private cityQuery: CityQuery,
    private router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'Selected',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/fstar.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'NotSelected',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/star.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'Delete',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/del.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'Edit',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/edit.svg')
    )
  }

  ngOnInit() {
    this.titleEvent.emit('Список городов');
    this.cities$ = this.cityQuery.selectCities$;
  }

  addToFavorite(id: number) {
    this.cityService.changeFavorite(id, true);
  }

  delFromFavorite(id: number) {
    this.cityService.changeFavorite(id, false);
  }

  deleteCity(id: number) {
    this.cityService.deleteCity(id);
  }

  navigateToEditForm(id: number) {
    this.router.navigate([`edit/${id}`])
  }
}
