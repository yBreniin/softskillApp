import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutogestaoPage } from './autogestao.page';

const routes: Routes = [
  {
    path: '',
    component: AutogestaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutogestaoPageRoutingModule {}
