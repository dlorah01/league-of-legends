import { Component, Input } from '@angular/core';
import { Passive } from '../champion-detail/models/passive';
import { Spell } from '../champion-detail/models/spell';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.sass']
})
export class AbilityComponent {
  @Input() ability!: Spell
  @Input() index!: number

  trimTextDescription(text: string): string {
    return text.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, '')
  }
}
