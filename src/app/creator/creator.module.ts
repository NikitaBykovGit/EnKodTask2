import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreatorRoutingModule } from './creator-routing.module';
import { CreatorComponent } from './creator.component';


@NgModule({
  declarations: [
    CreatorComponent
  ],
  imports: [
    CommonModule,
    CreatorRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreatorModule { }
