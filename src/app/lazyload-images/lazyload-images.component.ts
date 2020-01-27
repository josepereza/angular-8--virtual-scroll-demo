import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ImageService } from "./../core/image.service";

@Component({
  selector: "app-lazyload-images",
  templateUrl: "./lazyload-images.component.html",
  styleUrls: ["./lazyload-images.component.scss"]
})
export class LazyloadImagesComponent implements OnInit {
  public images$: Observable<{ url: string }[]>;

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.images$ = this.imageService.getImages();
  }
}
