import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.sass']
})
export class TabComponent {
  @Input() title!: string;
  @Input() version!: string;
  @Input() imageSource!: string;
  @Input() active = false;

  constructor(private cdr: ChangeDetectorRef) {}

  getImageSourceSpell(): string {
    return `https://ddragon.leagueoflegends.com/cdn/${this.version}/img/spell/${this.imageSource}`
  }
  getImageSourcePassive(): string {
    return `https://ddragon.leagueoflegends.com/cdn/${this.version}/img/passive/${this.imageSource}`
  }
}
