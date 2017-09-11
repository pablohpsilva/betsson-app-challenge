import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() title: string;
  @Input() rating: string;
  @Input() description: string;
  @Input() length: string;
  @Input() genres: any;
  @Input() img: string;
  @Input() show: boolean;
  @Input() youtube: string;

  constructor(private sanitizer: DomSanitizer) { }

  getBackgroundStyle() {
    return {
      'background-size': 'cover',
      'background-image': `url(../../../assets/images/movie-covers/${this.img})`,
      'background-position': 'center',
    }
  }

  youtubeURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.youtube);
  }

  ngOnInit() {
  }

}
