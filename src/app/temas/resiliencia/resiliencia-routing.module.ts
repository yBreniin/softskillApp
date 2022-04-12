import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResilienciaPage } from './resiliencia.page';

const routes: Routes = [
  {
    path: '',
    component: ResilienciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResilienciaPageRoutingModule {}
