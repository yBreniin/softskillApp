import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HonestidadePage } from './honestidade.page';

const routes: Routes = [
  {
    path: '',
    component: HonestidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HonestidadePageRoutingModule {}
