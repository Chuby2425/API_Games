import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* Esto es lazy louding */

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'genres',
    loadChildren: () => import('./genres/genres.module').then(m => m.GenresModule)
  },
  {
    path: 'platforms',
    loadChildren: () => import('./platforms/platforms.module').then(m => m.PlatformsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
