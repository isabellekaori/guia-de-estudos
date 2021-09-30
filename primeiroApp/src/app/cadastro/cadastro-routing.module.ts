import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroPage } from './cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroPage,
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
export class CadastroPageRoutingModule {}
