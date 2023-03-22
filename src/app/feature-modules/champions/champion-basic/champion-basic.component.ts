import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { Champion } from '../models/champion';

@Component({
  selector: 'app-champion-basic',
  templateUrl: './champion-basic.component.html',
  styleUrls: ['./champion-basic.component.sass']
})
export class ChampionBasicComponent {
  @Input() championInfo !: Champion
  fullyLoaded = false
  constructor() {

  }

  imageUrl(name: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`
  }

  doSomething(): void {
    console.log('loaded')
    this.fullyLoaded = true
  }
}
