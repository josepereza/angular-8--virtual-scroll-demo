import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VsLazyloadImagesComponent } from "./vs-lazyload-images.component";

const routes: Routes = [
  {
    path: "",
    component: VsLazyloadImagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VsLazyloadImagesRoutingModule {
  static components = [VsLazyloadImagesComponent];
}
