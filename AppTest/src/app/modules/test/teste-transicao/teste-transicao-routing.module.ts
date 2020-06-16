import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesteTransicaoPage } from './teste-transicao.page';

const routes: Routes = [
  {
    path: '',
    component: TesteTransicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TesteTransicaoPageRoutingModule {}
