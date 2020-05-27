import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http, private httpClient: HttpClient, ) { }

  getAlbum(id: number): Observable<any> {
    return this.httpClient.get(this._albumUrl);
  }

}
