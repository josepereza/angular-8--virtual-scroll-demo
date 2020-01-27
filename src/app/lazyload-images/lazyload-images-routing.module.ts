import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LazyloadImagesComponent } from "./lazyload-images.component";

const routes: Routes = [
  {
    path: "lazyload-images",
    component: LazyloadImagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadImagesRoutingModule {
  static components = [LazyloadImagesComponent];
}
