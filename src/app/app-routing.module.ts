import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'resiliencia',
    loadChildren: () =>
      import('./temas/resiliencia/resiliencia.module').then(
        (m) => m.ResilienciaPageModule
      ),
  },
  {
    path: 'honestidade',
    loadChildren: () =>
      import('./temas/honestidade/honestidade.module').then(
        (m) => m.HonestidadePageModule
      ),
  },
  {
    path: 'autogestao',
    loadChildren: () =>
      import('./temas/autogestao/autogestao.module').then(
        (m) => m.AutogestaoPageModule
      ),
  },
  {
    path: 'autoconfianca',
    loadChildren: () =>
      import('./temas/autoconfianca/autoconfianca.module').then(
        (m) => m.AutoconfiancaPageModule
      ),
  },
  {
    path: 'motivacao',
    loadChildren: () =>
      import('./temas/motivacao/motivacao.module').then(
        (m) => m.MotivacaoPageModule
      ),
  },
  {
    path: 'detalhes',
    loadChildren: () =>
      import('./temas/detalhes/detalhes.module').then(
        (m) => m.DetalhesPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
