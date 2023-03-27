import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { Champion } from '../models/champion';

@Component({
  selector: 'app-champion-basic',
  templateUrl: './champion-basic.component.html',
  styleUrls: ['./champion-basic.component.sass']
})
export class ChampionBasicComponent {
  @Input() championInfo !: Champion
  @Input() championsNames !: string[]
  enemyChamps!: string[]

  fullyLoaded = false
  constructor() {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.enemyChamps = this.giveTwoEnemies()
    })
  }

  imageUrl(name: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`
  }

  doSomething(): void {
    console.log('loaded')
    this.fullyLoaded = true
  }

  giveTwoEnemies(): string[] {
    let answer : string[] = []
    if (this.championInfo && this.championsNames) {
      while (answer.length < 2) {
        const randomNumber = Math.floor(Math.random() * (this.championsNames.length - 1))
        let championObtained = this.championsNames[randomNumber]
        let champIndex = answer.findIndex((champ) => champ === championObtained)
        if (championObtained !== this.championInfo.id && champIndex === -1) {
          answer.push(championObtained)
        }
      }
    }
    return answer
  }
}
