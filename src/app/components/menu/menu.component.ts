import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  myMenu: any;
  oppMenu: any;

  constructor() {
  }

  toggleClassMenu() {
    this.myMenu.classList.add("menu--animatable");

    if (!this.myMenu.classList.contains("menu--visible")) {
      this.myMenu.classList.add("menu--visible");
      return;
    }
    this.myMenu.classList.remove('menu--visible');
  }

  onTransitionEnd() {
    this.myMenu.classList.remove("menu--animatable");
  }

  ngOnInit() {
    this.myMenu = document.querySelector(".menu");
    this.oppMenu = document.querySelector(".menu-icon");
    this.myMenu.addEventListener("transitionend", this.onTransitionEnd.bind(this), false);
    this.oppMenu.addEventListener("click", this.toggleClassMenu.bind(this), false);
    this.myMenu.addEventListener("click", this.toggleClassMenu.bind(this), false);
  }

}
