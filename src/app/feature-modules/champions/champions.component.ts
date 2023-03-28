import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, switchMap, tap } from 'rxjs';
import { DdragonService } from '../services/ddragon.service';
import { Champion } from './models/champion';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.sass']
})
export class ChampionsComponent implements AfterViewInit{
  championsArray: Champion[] = []
  version!: string
  classes: any = {}
  championsNames: string[] = []
  @ViewChild('input') input!: ElementRef;
  isClean: boolean = true
  searchArray: Champion[] = []

  constructor(private dDragonService: DdragonService) {
    this.dDragonService.getDDragonDataVersion().pipe(
    switchMap((versions: string[]) => {
      this.version = versions[0]
      return this.dDragonService.getChampions(this.version)
    })).subscribe((champions) => {
      for (const key in champions) {
        this.championsArray.push(champions[key])
        this.championsNames.push(champions[key].id)
        champions[key].tags.forEach((x: string) => {
          if (!this.classes[x]) this.classes[x] = true
        })
      }
      this.searchArray = [...this.championsArray]
    })
  }

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement,'keyup')
            .pipe(
                filter(Boolean),
                debounceTime(150),
                distinctUntilChanged(),
                tap((text) => {
                  console.log('text', text)
                  let texts = (this.input.nativeElement.value || '').toLowerCase()
                  this.isClean = false
                  this.searchArray = this.championsArray.filter((x) => x.id.toLowerCase().includes(texts))
                })
            )
            .subscribe();
  }

  filter(text: string): void {
  }


  cleanField(): void {
    this.isClean = true
    this.input.nativeElement.value = ''
    this.searchArray = [...this.championsArray]
  }
}
