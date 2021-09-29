import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcularNotaPage } from './calcular-nota.page';

const routes: Routes = [
  {
    path: '',
    component: CalcularNotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcularNotaPageRoutingModule {}
