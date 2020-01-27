import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VsLazyloadImagesRoutingModule } from './vs-lazyload-images-routing.module';
import { VsLazyloadImagesComponent } from './vs-lazyload-images.component';


@NgModule({
  declarations: [VsLazyloadImagesComponent],
  imports: [
    CommonModule,
    VsLazyloadImagesRoutingModule
  ]
})
export class VsLazyloadImagesModule { }
