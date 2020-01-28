import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ImageService } from "./../core/services/image.service";

@Component({
  selector: "app-virtual-scroll",
  templateUrl: "./virtual-scroll.component.html",
  styleUrls: ["./virtual-scroll.component.scss"]
})
export class VirtualScrollComponent implements OnInit {
  public images$: Observable<{ url: string }[]>;

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.images$ = this.imageService.getImages();
  }

  trackByIdx(i) {
    return i;
  }
}
