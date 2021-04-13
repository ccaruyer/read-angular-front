import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/'
import { Author } from '../../models/author';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthorService {

  endPoint: string = environment.EndPoint;

  constructor(private _httpAuthor: HttpClient) {}

  get(): Observable<Author[]>{
    return this._httpAuthor.get<Author[]>(this.endPoint+"/authors")
  }
}