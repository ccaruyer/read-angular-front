import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/core/models/book';
import { BookService } from 'src/app/core/services/http/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;
  displayedColumns: string[] = ['id', 'title', 'summary', 'kind', 'author', 'edit', 'delete'];
  books = [];
  constructor(private _bookService: BookService, private _router: Router) { }

  ngOnInit(): void {
    this.books$ = this._bookService.get();

  }

  put(id) {
    this._router.navigateByUrl("books/books-form/" + id);
  }

  deleteOne(id) {
    this._bookService.deleteOne(id).subscribe(next => {
      window.location.reload();
    });

  }

  goToForm() {
    this._router.navigateByUrl("books/books-form");
  }

}
