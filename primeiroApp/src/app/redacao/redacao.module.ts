import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedacaoPageRoutingModule } from './redacao-routing.module';

import { RedacaoPage } from './redacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedacaoPageRoutingModule
  ],
  declarations: [RedacaoPage]
})
export class RedacaoPageModule {}
