import { ScrollingModule } from "@angular/cdk/scrolling";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LazyLoadImageModule } from "ng-lazyload-image";

@NgModule({
  declarations: [],
  imports: [CommonModule, LazyLoadImageModule, ScrollingModule],
  exports: [CommonModule, LazyLoadImageModule, ScrollingModule]
})
export class SharedModule {}
