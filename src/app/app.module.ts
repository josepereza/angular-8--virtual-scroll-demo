import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { LazyloadImagesModule } from "./lazyload-images/lazyload-images.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, LazyloadImagesModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
