import { NgModule } from "@angular/core";
import { SharedModule } from "./../shared/shared.module";
import { VsLazyloadImagesRoutingModule } from "./vs-lazyload-images-routing.module";

@NgModule({
  declarations: [VsLazyloadImagesRoutingModule.components],
  imports: [SharedModule, VsLazyloadImagesRoutingModule]
})
export class VsLazyloadImagesModule {}
