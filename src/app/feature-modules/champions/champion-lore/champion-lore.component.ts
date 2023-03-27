import { AfterContentChecked, Component, Input } from '@angular/core';
import { ChampionDetail } from '../champion-detail/models/champion-detail';

@Component({
  selector: 'app-champion-lore',
  templateUrl: './champion-lore.component.html',
  styleUrls: ['./champion-lore.component.sass']
})
export class ChampionLoreComponent implements AfterContentChecked {
  @Input() champion !: ChampionDetail
  @Input() version !: string
  @Input() enemies !: string[]
  championBanner!: string
  championProfile!: string
  championProfile2!:string
  championProfile3!: string

  constructor() {}

  ngAfterContentChecked(): void {
    if (this.champion && this.version && !this.championBanner && this.enemies) {
      this.championBanner = this.getRandomBannerImage()
      this.championProfile = this.getChampionSquareImage()
      this.championProfile2 = this.getChampionSquareImage(this.enemies[0])
      this.championProfile3 = this.getChampionSquareImage(this.enemies[1])
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

  getChampionSquareImage(champion: string = this.champion.id): string {
    return `https://ddragon.leagueoflegends.com/cdn/${this.version}/img/champion/${champion}.png`
  }

}
