import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { DdragonService } from '../services/ddragon.service';
import { Item } from './models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent {
  itemsArray: Item[] = []
  version!: string
  keyExpections: string[] = ['7050']

  constructor(private dDragonService: DdragonService) {
    this.dDragonService.getDDragonDataVersion().pipe(
    switchMap((versions: string[]) => {
      this.version = versions[0]
      return this.dDragonService.getItems(this.version)
    })).subscribe((items: Item[]) => {
      for (const key in items) {
        if (!this.keyExpections.includes(key)) this.itemsArray.push({...items[key], id: key})
      }
    })
  }
}
