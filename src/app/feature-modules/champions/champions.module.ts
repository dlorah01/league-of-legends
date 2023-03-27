import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsComponent } from './champions.component';
import { ChampionsRoutingModule } from './champions-routing.module';
import { ChampionBasicComponent } from './champion-basic/champion-basic.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';
import { AbilityComponent } from './ability/ability.component';
import { PassiveComponent } from './passive/passive.component';
import { ChampionAbilitiesComponent } from './champion-abilities/champion-abilities.component';
import { ChampionLoreComponent } from './champion-lore/champion-lore.component';
import { ChampionStatisticsComponent } from './champion-statistics/champion-statistics.component';
import { ChampionSkinsComponent } from './champion-skins/champion-skins.component';
import { ChampionHeaderComponent } from './champion-header/champion-header.component';



@NgModule({
  declarations: [
    ChampionsComponent,
    ChampionBasicComponent,
    ChampionDetailComponent,
    AbilityComponent,
    PassiveComponent,
    ChampionAbilitiesComponent,
    ChampionLoreComponent,
    ChampionStatisticsComponent,
    ChampionSkinsComponent,
    ChampionHeaderComponent
  ],
  imports: [
    CommonModule,
    ChampionsRoutingModule,
    CommonComponentsModule
  ]
})
export class ChampionsModule { }
