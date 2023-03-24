import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';



@NgModule({
  declarations: [
    TopnavComponent,
    FooterComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopnavComponent,
    FooterComponent,
    TabsComponent,
    TabComponent
  ]
})
export class CommonComponentsModule { }
