import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedacaoPage } from './redacao.page';

const routes: Routes = [
  {
    path: '',
    component: RedacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedacaoPageRoutingModule {}
