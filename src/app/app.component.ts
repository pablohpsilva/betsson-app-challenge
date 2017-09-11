import { Component } from '@angular/core';
import { movies } from '../assets/mock/movie.mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  textFilter = '';
  movies = Object.assign([], movies)


  constructor() {
  }

  updateTextFilter(message) {
    this.textFilter = message
  }
}
