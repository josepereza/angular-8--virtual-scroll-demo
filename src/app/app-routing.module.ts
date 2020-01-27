import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LazyloadImagesComponent } from "./lazyload-images/lazyload-images.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "lazyload-images" },
  { path: "lazyload-images", component: LazyloadImagesComponent },
  {
    path: "virtual-scroll",
    loadChildren: () =>
      import("../app/virtual-scroll/virtual-scroll.module").then(
        m => m.VirtualScrollModule
      )
  },
  {
    path: "vs-lazyload-images",
    loadChildren: () =>
      import("../app/vs-lazyload-images/vs-lazyload-images.module").then(
        m => m.VsLazyloadImagesModule
      )
  },
  { path: "**", pathMatch: "full", component: LazyloadImagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
