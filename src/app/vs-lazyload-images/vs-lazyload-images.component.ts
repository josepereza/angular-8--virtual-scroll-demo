import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ImageService } from "./../core/services/image.service";

@Component({
  selector: "app-vs-lazyload-images",
  templateUrl: "./vs-lazyload-images.component.html",
  styleUrls: ["./vs-lazyload-images.component.scss"]
})
export class VsLazyloadImagesComponent implements OnInit {
  // Path to default image. This image will be loaded right away.
  public defaultImage = "https://via.placeholder.com/500x300";

  // The images to be lazy loaded. This image will replace the default image (defaultImage)
  public images$: Observable<{ url: string }[]>;

  // An image to be loaded if failing to load lazyLoad. Will load the default image (defaultImage) if absent.
  public errorImage =
    "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Error Loading the Image";

  public scrollRef;

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.images$ = this.imageService.getImages();
    this.scrollRef = document.querySelector("container-main");
  }

  trackByIdx(i) {
    return i;
  }
}
