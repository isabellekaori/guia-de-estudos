import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcularNotaPageRoutingModule } from './calcular-nota-routing.module';

import { CalcularNotaPage } from './calcular-nota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcularNotaPageRoutingModule
  ],
  declarations: [CalcularNotaPage]
})
export class CalcularNotaPageModule {}
