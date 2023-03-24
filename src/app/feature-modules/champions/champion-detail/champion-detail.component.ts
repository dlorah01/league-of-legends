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

  constructor(private dDragonService: DdragonService, private route: ActivatedRoute) {
    console.log('entro consutrcor', this.championDetail)
    this.route.params.pipe(
      switchMap((params: Params) => {
        this.championId = params['id']
        return this.dDragonService.getDDragonDataVersion()
      }),
      switchMap((versions: string[]) => {
        this.version = versions[0]
        return this.dDragonService.getChampionDetails(this.championId, this.version)
      })
    ).subscribe((answer: any) => {
      this.championDetail = answer[this.championId] as ChampionDetail
      this.championBanner = this.getRandomBannerImage()
      this.championSquare = this.getChampionSquareImage()
      this.championsSpells = this.getChampionSpells()
    })
  }

  getRandomBannerImage(): string {
    if(this.championDetail && this.championDetail.skins) {
      const randomNumber = Math.floor(Math.random() * (this.championDetail.skins.length - 1))
      let skinNumber = this.championDetail.skins[randomNumber].num || 0
      return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.championId}_${skinNumber}.jpg`
    }
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.championId}_0.jpg`
  }

  getChampionSquareImage(): string {
    return `https://ddragon.leagueoflegends.com/cdn/${this.version}/img/champion/${this.championId}.png`
  }

  getTagImage(tag: string): string {
    return `../../../../assets/images/${tag.toLowerCase()}_icon.png`
  }

  getChampionSpells(): any[] {
    let answer : any[] = []
    answer = this.championDetail.spells
    answer.unshift(this.championDetail.passive)
    return answer
  }

}
