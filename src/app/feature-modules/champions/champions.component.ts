import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { DdragonService } from '../services/ddragon.service';
import { Champion } from './models/champion';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.sass']
})
export class ChampionsComponent {
  championsArray: Champion[] = []
  version!: string

  constructor(private dDragonService: DdragonService) {
    this.dDragonService.getDDragonDataVersion().pipe(
    switchMap((versions: string[]) => {
      this.version = versions[0]
      return this.dDragonService.getChampions(this.version)
    })).subscribe((champions) => {
      for (const key in champions) {
        this.championsArray.push(champions[key])
      }
    })
  }
}
