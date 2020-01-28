import { NgModule } from "@angular/core";
import { SharedModule } from "./../shared/shared.module";
import { VirtualScrollRoutingModule } from "./virtual-scroll-routing.module";

@NgModule({
  declarations: [VirtualScrollRoutingModule.components],
  imports: [SharedModule, VirtualScrollRoutingModule]
})
export class VirtualScrollModule {}
