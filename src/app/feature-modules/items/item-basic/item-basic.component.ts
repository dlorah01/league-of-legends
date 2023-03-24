import { Component, Input } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-basic',
  templateUrl: './item-basic.component.html',
  styleUrls: ['./item-basic.component.sass']
})
export class ItemBasicComponent {
  @Input() itemInfo !: Item
  @Input() version !: string
  fullyLoaded = false
  constructor() {

  }

  imageUrl(name: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/${this.version}/img/item/${name}.png`
  }

  doSomething(): void {
    console.log('loaded')
    this.fullyLoaded = true
  }
}
