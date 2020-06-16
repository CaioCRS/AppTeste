import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TesteTransicaoPageRoutingModule } from './teste-transicao-routing.module';

import { TesteTransicaoPage } from './teste-transicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TesteTransicaoPageRoutingModule
  ],
  declarations: [TesteTransicaoPage]
})
export class TesteTransicaoPageModule {}
