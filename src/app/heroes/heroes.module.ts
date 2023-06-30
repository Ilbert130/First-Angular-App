import { NgModule } from "@angular/core";
import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  // Debemos importar el commonModule porque el ngIF y For son referencias de angular y estamos usando el modulo de angular
  imports: [
    CommonModule
  ]
})
export class HeroesModule {

}
