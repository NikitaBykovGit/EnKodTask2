import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TileRoutingModule } from './tile-routing.module';
import { TileComponent } from './tile.component';


@NgModule({
  declarations: [
    TileComponent
  ],
  imports: [
    CommonModule,
    TileRoutingModule
  ]
})
export class TileModule { }
