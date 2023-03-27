import { AfterContentChecked, AfterContentInit, Component, Input } from '@angular/core';
import { ChampionDetail } from '../champion-detail/models/champion-detail';

@Component({
  selector: 'app-champion-abilities',
  templateUrl: './champion-abilities.component.html',
  styleUrls: ['./champion-abilities.component.sass']
})
export class ChampionAbilitiesComponent implements AfterContentChecked {
  @Input() champion !: ChampionDetail
  @Input() version !: string
  championsSpells!: any[]

  constructor() {}

  ngAfterContentChecked(): void {
    if (this.champion && this.version) {
      this.championsSpells = [...this.getChampionSpells()]
    }
  }

  getChampionSpells(): any[] {
    let answer : any[] = []
    answer = [...this.champion.spells]
    answer.unshift(this.champion.passive)
    return answer
  }

}
