import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryService } from '../gallery.service';
import { User } from '../user';
import { map } from 'rxjs/operators';

@Component({
  selector: 'demo-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.users$ = this.galleryService
      .getImages(120)
      .pipe(map(({ results }) => results));
  }
}
