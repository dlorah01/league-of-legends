import { AfterContentChecked, Component, Input } from '@angular/core';
import { ChampionDetail } from '../champion-detail/models/champion-detail';
import { Skin } from '../champion-detail/models/skin';

@Component({
  selector: 'app-champion-skins',
  templateUrl: './champion-skins.component.html',
  styleUrls: ['./champion-skins.component.sass']
})
export class ChampionSkinsComponent  implements AfterContentChecked {
  @Input() champion !: ChampionDetail
  @Input() version !: string
  @Input() enemies !: string[]
  championBanner!: string
  championSkins !: Skin[]
  activeIndex = 0

  constructor() {}

  ngAfterContentChecked(): void {
    if (this.champion && this.version) {
      this.championSkins = this.getChampionSkins()
      this.championBanner = this.getSkinImage(this.activeIndex)
    }
  }

  getSkinImage(index: number): string {
    if(this.champion && this.champion.skins) {
      let skinNumber = this.championSkins[index].num
      return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.champion.id}_${skinNumber}.jpg`
    }
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.champion.id}_0.jpg`
  }


  getChampionSkins(): Skin[] {
    return this.champion.skins
  }

  changeActiveSkin(id: number) {
    this.activeIndex = id
    this.championBanner = this.getSkinImage(this.activeIndex)
  }

}
