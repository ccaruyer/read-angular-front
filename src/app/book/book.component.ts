import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../core/services/http/book.service';
import { Book } from '../core/models/book';

@Component({
  selector: 'app-student',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.books$ = this._bookService.get();

  }

}
