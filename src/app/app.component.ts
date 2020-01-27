import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ImageService } from "./core/image.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Virtual Scroll Demo";

  public images$: Observable<{ url: string }[]>;

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.images$ = this.imageService.getImages();
  }
}
