import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMateriasPage } from './edit-materias.page';

const routes: Routes = [
  {
    path: '',
    component: EditMateriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMateriasPageRoutingModule {}
