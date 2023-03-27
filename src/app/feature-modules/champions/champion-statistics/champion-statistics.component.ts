import { AfterContentChecked, Component, Input } from '@angular/core';
import { ChampionDetail } from '../champion-detail/models/champion-detail';

@Component({
  selector: 'app-champion-statistics',
  templateUrl: './champion-statistics.component.html',
  styleUrls: ['./champion-statistics.component.sass']
})
export class ChampionStatisticsComponent implements AfterContentChecked {
  @Input() champion !: ChampionDetail
  @Input() version !: string
  championsStats!: any[]

  constructor() {}

  ngAfterContentChecked(): void {
    if (this.champion && this.version) {
      this.championsStats = this.getChampionStatistics()
    }
  }

  getChampionStatistics(): any[] {
    let answer = []
    let obj = this.champion.stats
    answer = [...Object.entries(obj)]
    return answer
  }

}
