import { Component, Input } from '@angular/core';
import { Passive } from '../champion-detail/models/passive';

@Component({
  selector: 'app-passive',
  templateUrl: './passive.component.html',
  styleUrls: ['./passive.component.sass']
})
export class PassiveComponent {
  @Input() passive!: Passive

  trimTextDescription(): string {
    console.log('passive', this.passive)
    return this.passive.description.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, '').replace('{{','').replace('}}', '')
  }
}
