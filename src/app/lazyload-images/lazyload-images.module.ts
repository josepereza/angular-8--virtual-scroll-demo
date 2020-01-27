import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LazyloadImagesRoutingModule } from "./lazyload-images-routing.module";

@NgModule({
  declarations: [LazyloadImagesRoutingModule.components],
  imports: [CommonModule, LazyloadImagesRoutingModule]
})
export class LazyloadImagesModule {}
