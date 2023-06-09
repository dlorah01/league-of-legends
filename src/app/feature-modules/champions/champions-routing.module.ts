import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { ChampionsComponent } from './champions.component';

const routes: Routes = [
  {
    path: '',
    component: ChampionsComponent,
  },
  {
    path: ':id/:id2/:id3',
    component: ChampionDetailComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChampionsRoutingModule { }
