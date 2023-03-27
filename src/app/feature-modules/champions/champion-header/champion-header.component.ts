import { AfterContentChecked, AfterViewInit, Component, Input } from '@angular/core';
import { ChampionDetail } from '../champion-detail/models/champion-detail';

@Component({
  selector: 'app-champion-header',
  templateUrl: './champion-header.component.html',
  styleUrls: ['./champion-header.component.sass']
})
export class ChampionHeaderComponent implements AfterContentChecked {
  @Input() champion !: ChampionDetail
  @Input() version !: string
  championBanner!: string
  championProfile!: string

  constructor() {}

  ngAfterContentChecked(): void {
    if (this.champion && this.version && !this.championBanner) {
      this.championBanner = this.getRandomBannerImage()
      this.championProfile = this.getChampionSquareImage()
    }
  }

  getTagImage(tag: string): string {
    return `../../../../assets/images/${tag.toLowerCase()}_icon.png`
  }

  getRandomBannerImage(): string {
    if(this.champion && this.champion.skins) {
      const randomNumber = Math.floor(Math.random() * (this.champion.skins.length - 1))
      let skinNumber = this.champion.skins[randomNumber].num || 0
      return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.champion.id}_${skinNumber}.jpg`
    }
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.champion.id}_0.jpg`
  }

  getChampionSquareImage(): string {
    return `https://ddragon.leagueoflegends.com/cdn/${this.version}/img/champion/${this.champion.id}.png`
  }
}
