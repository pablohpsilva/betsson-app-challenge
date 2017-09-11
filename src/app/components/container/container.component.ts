import { AfterViewInit, Component, ElementRef, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('container') el: ElementRef;
  @Input() movies: any;
  @Input() textFilter: string;
  @Input() genderFilter: any;

  tileElements: any;
  filteredList: any = [];

  constructor() {
  }

  setTileElements() {
    const elements = this.el.nativeElement.querySelectorAll('.element');
    this.tileElements = [];
    for(let elem of elements) {
      this.tileElements.push(elem);
    }
  }

  onMovieClick(movie) {
    movie.show = !movie.show
  }

  getCollapsedExpandedMeasures(collapsed, expanded) {
    return [
      collapsed.top - expanded.top,
      collapsed.left - expanded.left,
      collapsed.width / expanded.width,
      collapsed.height / expanded.height,
    ]
  }

  setTileElementOnClickEvent(elem) {
    elem.addEventListener('click', () => {
      if (elem.classList.contains('collapsed')) {

        elem.classList.add('expanding');
        elem.classList.remove('collapsed');
        elem.classList.add('expanded');

        const collapsed = elem.getBoundingClientRect();
        elem.classList.remove('expanded');
        elem.classList.add('collapsed');

        const expanded = elem.getBoundingClientRect();
        elem.classList.add('transition');

        const [invertedTop, invertedLeft, invertedWidth, invertedHeight] = this.getCollapsedExpandedMeasures(collapsed, expanded);

        elem.style.transformOrigin = 'top left';

        elem.style.transform = `translateX(${invertedLeft}px) translateY(${invertedTop}px) translateZ(0) scaleX(${invertedWidth}) scaleY(${invertedHeight})`;

        elem.addEventListener('transitionend', function handler(event) {
          elem.style.transform = '';
          elem.style.transformOrigin = '';
          elem.classList.remove('transition');
          elem.classList.remove('expanding');
          elem.classList.remove('collapsed');
          elem.classList.add('expanded');
          elem.removeEventListener('transitionend', handler);
        });

      }
    });

    const close = elem.querySelector('.close');

    close.addEventListener('click', () => {
      if (elem.classList.contains('expanded') && !elem.classList.contains('collapsing')) {

        requestAnimationFrame(() => {
          elem.classList.add('collapsing');
          elem.classList.remove('expanded');
          elem.classList.add('collapsed');

          const collapsed = elem.getBoundingClientRect();
          elem.classList.remove('collapsed');
          elem.classList.add('expanded');

          const expanded = elem.getBoundingClientRect();
          elem.classList.add('transition');

          const [invertedTop, invertedLeft, invertedWidth, invertedHeight] = this.getCollapsedExpandedMeasures(collapsed, expanded);

          elem.style.transformOrigin = 'top left';
          elem.style.transform = `translate(${invertedLeft}px, ${invertedTop}px) scale(${invertedWidth}, ${invertedHeight})`;

          elem.addEventListener('transitionend', function handler(event) {
            elem.style.transform = '';
            elem.style.transformOrigin = '';
            elem.style.webkitTransform = '';
            elem.style.webkitTransformationOrigin = '';
            elem.classList.remove('transition');
            elem.classList.remove('collapsing');
            elem.classList.remove('expanded');
            elem.classList.add('collapsed');
            elem.removeEventListener('transitionend', handler);
          });

        });

      }
    })
  }

  ngAfterViewInit() {
    // console.log(this);
    this.setTileElements();
    this.tileElements.map(elem => this.setTileElementOnClickEvent(elem))
  }

  ngOnInit() {
    this.setTileElements();
    this.tileElements.map(elem => this.setTileElementOnClickEvent(elem));
    this.filterMovieList();
  }

  filterMovieList(title = '') {
    const movies = Object.assign([], this.movies);
    if (!title) {
      this.filteredList = movies;
      return;
    }
    this.filteredList = movies.filter(el => ~el.name.toLowerCase().indexOf(title.toLowerCase()));
  }

  ngOnChanges(changes: any) {
    const { textFilter } = changes;
    if (textFilter) {
      this.filterMovieList(textFilter.currentValue)
    }
  }

}
