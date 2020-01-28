import { NgModule } from "@angular/core";
import { SharedModule } from "./../shared/shared.module";
import { LazyloadImagesRoutingModule } from "./lazyload-images-routing.module";
@NgModule({
  declarations: [LazyloadImagesRoutingModule.components],
  imports: [SharedModule, LazyloadImagesRoutingModule]
})
export class LazyloadImagesModule {}
