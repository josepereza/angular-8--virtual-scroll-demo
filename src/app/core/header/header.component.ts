import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  constructor(private router: Router) {}

  public goDemo1() {
    this.router.navigate(["lazyload-images"]);
  }

  public goDemo2() {
    this.router.navigate(["virtual-scroll"]);
  }

  public goDemo3() {
    this.router.navigate(["vs-lazyload-images"]);
  }
}
