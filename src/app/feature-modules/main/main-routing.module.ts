import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { MainComponent } from "./main.component"

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'champions',
        loadChildren: () => import('../champions/champions.module').then((m) => m.ChampionsModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'items',
        loadChildren: () => import('../items/items.module').then((m) => m.ItemsModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MainRoutingModule {}
