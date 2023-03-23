import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  /* Esto es lazy louding */

  {
    path: '',
    redirectTo: 'action',
    pathMatch: 'full'
  },
{
  path: 'action',
  loadChildren: () => import('./action/action.module').then(m => m.ActionModule)
},

{
  path: 'strategy',
  loadChildren: () => import('./strategy/strategy.module').then(m => m.StrategyModule)
}
/*{
  path: 'rpg',
  loadChildren: () => import('./rpg/rpg.module').then(m => m.RpgModule)
},
{
  path: 'shooter',
  loadChildren: () => import('./shooter/shooter.module').then(m => m.ShooterModule)
},
{
  path: 'adventure',
  loadChildren: () => import('./adventure/adventure.module').then(m => m.AdventureModule)
},
{
  path: 'puzzle',
  loadChildren: () => import('./puzzle/puzzle.module').then(m => m.PuzzleModule)
},
{
  path: 'racing',
  loadChildren: () => import('./racing/racing.module').then(m => m.RacingModule)
},
{
  path: 'sports',
  loadChildren: () => import('./sports/sports.module').then(m => m.SportsModule)
},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
