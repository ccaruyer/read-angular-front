import { Injectable } from '@angular/core';
import { Book } from '../../models/book';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class BookService {

  endPoint: string = environment.BookEndPoint;

  constructor(private _httpClient: HttpClient) {
  }

  get(): Observable<Book[]> {
    return this._httpClient.get<Book[]>(this.endPoint)
  }

  post(book: Book): Observable<Book> {
    return this._httpClient.post<Book>(this.endPoint, book)
  }

  getById(id): Observable<Book> {
    return this._httpClient.get<Book>(this.endPoint + "/" + id)
  }

  deleteOne(id): Observable<Book> {
    return this._httpClient.delete<Book>(this.endPoint + "/" + id)
  }

  put(id, book: Book): Observable<Book> {
    return this._httpClient.put<Book>(this.endPoint + "/" + id, book)
  }

}
