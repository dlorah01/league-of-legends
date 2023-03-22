import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsComponent } from './champions.component';
import { ChampionsRoutingModule } from './champions-routing.module';
import { ChampionBasicComponent } from './champion-basic/champion-basic.component';



@NgModule({
  declarations: [
    ChampionsComponent,
    ChampionBasicComponent
  ],
  imports: [
    CommonModule,
    ChampionsRoutingModule
  ]
})
export class ChampionsModule { }
