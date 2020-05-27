import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private http: HttpClient) { }

  getAlbum(id: number): Observable<any> {
    return this.http.get(this._albumUrl);
  }

}
