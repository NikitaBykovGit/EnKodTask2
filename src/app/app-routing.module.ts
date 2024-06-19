import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    loadChildren: () => import('./creator/creator.module').then(m => m.CreatorModule)
  },
  {
    path: '',
    loadChildren: () => import('./displayer/displayer.module').then(m => m.DisplayerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
