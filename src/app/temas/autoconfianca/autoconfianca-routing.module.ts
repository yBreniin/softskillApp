import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoconfiancaPage } from './autoconfianca.page';

const routes: Routes = [
  {
    path: '',
    component: AutoconfiancaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoconfiancaPageRoutingModule {}
