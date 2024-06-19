import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { CityService } from '../state/city.service';
import { CityQuery } from '../state/city.query';
import { ICity } from '../models/city';

@Component({
  selector: 'app-create',
  templateUrl: './creator.component.html',
  styleUrl: './creator.component.css'
})

export class CreatorComponent {
  @Output() titleEvent = new EventEmitter<string>();

  id: number | null;
  isSuccess: boolean;
  cityForm : FormGroup;
  isList$: Observable<boolean>;

  constructor (
    private cityService: CityService,
    private cityQuery: CityQuery,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.id = null;
    this.isSuccess = true;
    this.cityForm = new FormGroup({
      cityName: new FormControl<string>('', [Validators.required]),
      cityDescription: new FormControl<string>('', [Validators.required]),
      imageLink: new FormControl<string>('', [Validators.required])
    });
    this.matIconRegistry.addSvgIcon(
      'Back',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/undo.svg')
    )
  }

  ngOnInit() {
    this.isList$ = this.cityQuery.selectIsList$;
    this.activateRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    if (this.id) {
      this.titleEvent.emit('Редактировать город');
      this.cityQuery.selectCity(this.id!).subscribe((data: ICity) => {
        this.cityForm.controls['cityName'].setValue(data.name);
        this.cityForm.controls['cityDescription'].setValue(data.description);
        this.cityForm.controls['imageLink'].setValue(data.image)
      })
    } else {
      this.titleEvent.emit('Создать город');
    }
  }

  createUpdateCity() {
    if (this.cityForm.valid) {
      if (this.id) {
        this.cityService.editCity(
          this.id,
          this.cityForm.controls['cityName'].value,
          this.cityForm.controls['cityDescription'].value,
          this.cityForm.controls['imageLink'].value
        );
      } else {
        this.cityService.addCity(
        this.cityForm.controls['cityName'].value,
        this.cityForm.controls['cityDescription'].value,
        this.cityForm.controls['imageLink'].value
      )};
      this.isList$
        ? this.router.navigate([''])
        : this.router.navigate(['tile'])
    } else {
      this.isSuccess = false;
    }
    return false
  }
}
