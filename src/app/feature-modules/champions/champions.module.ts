import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsComponent } from './champions.component';
import { ChampionsRoutingModule } from './champions-routing.module';
import { ChampionBasicComponent } from './champion-basic/champion-basic.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';



@NgModule({
  declarations: [
    ChampionsComponent,
    ChampionBasicComponent,
    ChampionDetailComponent
  ],
  imports: [
    CommonModule,
    ChampionsRoutingModule,
    CommonComponentsModule
  ]
})
export class ChampionsModule { }
