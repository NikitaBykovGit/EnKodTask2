import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { TileRoutingModule } from './tile-routing.module';
import { TileComponent } from './tile.component';


@NgModule({
  declarations: [
    TileComponent
  ],
  imports: [
    CommonModule,
    TileRoutingModule,
    MatIconModule
  ]
})
export class TileModule { }
