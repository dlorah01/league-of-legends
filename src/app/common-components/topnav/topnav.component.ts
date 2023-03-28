import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.sass']
})
export class TopnavComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  goToMain(): void {
    this.router.navigate(['champions'], {relativeTo: this.route})
  }
}
