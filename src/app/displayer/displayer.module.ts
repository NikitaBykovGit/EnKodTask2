import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayerRoutingModule } from './displayer-routing.module';
import { DisplayerComponent } from './displayer.component';
import { NavigatorComponent } from './navigator/navigator.component';


@NgModule({
  declarations: [
    DisplayerComponent,
    NavigatorComponent
  ],
  imports: [
    CommonModule,
    DisplayerRoutingModule
  ]
})
export class DisplayerModule { }
