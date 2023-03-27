import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { DdragonService } from '../../services/ddragon.service';
import { ChampionDetail } from './models/champion-detail';
import { Spell } from './models/spell';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.sass']
})
export class ChampionDetailComponent {
  championDetail!: ChampionDetail
  championId!: string
  championBanner!: string
  championSquare!: string
  championsSpells!: any[]
  version!: string
  championEnemies!: string[]

  constructor(private dDragonService: DdragonService, private route: ActivatedRoute) {
    this.route.params.pipe(
      switchMap((params: Params) => {
        this.championId = params['id']
        this.championEnemies = [params['id2'], params['id3']]
        return this.dDragonService.getDDragonDataVersion()
      }),
      switchMap((versions: string[]) => {
        this.version = versions[0]
        return this.dDragonService.getChampionDetails(this.championId, this.version)
      })
    ).subscribe((answer: any) => {
      this.championDetail = answer[this.championId] as ChampionDetail
    })
  }


}
