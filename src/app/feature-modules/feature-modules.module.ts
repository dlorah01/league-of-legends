import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImagesDirective } from './directives/loaded.directive';



@NgModule({
  declarations: [
    LazyLoadImagesDirective
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModulesModule { }
