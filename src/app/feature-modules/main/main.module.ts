import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
    CommonComponentsModule
  ]
})
export class MainModule { }
