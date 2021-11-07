import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMateriasPageRoutingModule } from './edit-materias-routing.module';

import { EditMateriasPage } from './edit-materias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMateriasPageRoutingModule
  ],
  declarations: [EditMateriasPage]
})
export class EditMateriasPageModule {}
