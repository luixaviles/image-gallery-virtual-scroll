import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpClient: HttpClient) { }

  getImages(count: number = 100): Observable<{results: User[]}> {
    return this.httpClient.get<{results: User[]}>(`https://randomuser.me/api/?results=${count}&inc=picture`);
  }
}
