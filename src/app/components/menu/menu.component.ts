import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { genreType } from '../../../assets/mock/movie.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  myMenu: any;
  oppMenu: any;
  width: number;
  textFilter: string;
  genreFilter: any;
  searchable: boolean;
  genreTypes: any;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

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

  toggleSearchBar() {
    if (this.searchable) {
      this.textFilter = '';
      this.notify.emit(this.textFilter)
    }
    this.searchable = !this.searchable;
  }

  onTransitionEnd() {
    this.myMenu.classList.remove("menu--animatable");
  }

  setMenuBehaviour() {
    this.myMenu = document.querySelector(".menu");
    this.oppMenu = document.querySelector(".menu-icon");
    this.myMenu.addEventListener("transitionend", this.onTransitionEnd.bind(this), false);
    this.oppMenu.addEventListener("click", this.toggleClassMenu.bind(this), false);
    this.myMenu.addEventListener("click", this.toggleClassMenu.bind(this), false);
  }


  // setResizeEvent() {
  //   Observable.fromEvent(window, 'scroll')
  //     .map((el) => {
  //       // return document.documentElement.clientWidth;
  //       return el;
  //     })
  //     .debounceTime(200)
  //     .subscribe(data => {
  //       console.log(data)
  //     });
  // }

  textFilterMovies() {
    this.notify.emit(this.textFilter)
  }

  setGenreTypes() {
    this.genreTypes = Object.keys(genreType)
      .map(el => ({
        checked: false,
        value: el,
      }))
  }

  ngOnInit() {
    console.log(genreType);
    // this.setResizeEvent();
    this.setMenuBehaviour();
    this.setGenreTypes();
  }
}
