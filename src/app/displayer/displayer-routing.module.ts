import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayerComponent } from './displayer.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    component: DisplayerComponent,
    path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule)
  },
  {
    component: DisplayerComponent,
    path: 'tile', loadChildren: () => import('./tile/tile.module').then(m => m.TileModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayerRoutingModule { }
