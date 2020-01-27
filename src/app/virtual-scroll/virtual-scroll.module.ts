import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { VirtualScrollRoutingModule } from "./virtual-scroll-routing.module";

@NgModule({
  declarations: [VirtualScrollRoutingModule.components],
  imports: [CommonModule, VirtualScrollRoutingModule]
})
export class VirtualScrollModule {}
