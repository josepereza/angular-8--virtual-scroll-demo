// import { ScrollingModule } from "@angular/cdk/scrolling";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    //   ScrollingModule,
    LazyLoadImageModule
  ],
  exports: [
    HttpClientModule,
    //  ScrollingModule,
    LazyLoadImageModule,
    HeaderComponent
  ]
})
export class CoreModule {}
