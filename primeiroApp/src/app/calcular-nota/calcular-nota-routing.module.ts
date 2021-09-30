import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcularNotaPage } from './calcular-nota.page';

const routes: Routes = [
  {
    path: '',
    component: CalcularNotaPage,
    children: [{
      path: 'home',
      loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcularNotaPageRoutingModule {}
