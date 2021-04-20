import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/core/models/book';
import { BookFormData } from 'src/app/core/models/book-form-data';
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
  constructor(private _bookService: BookService, private _router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.books$ = this._bookService.get();
  };

  deleteOne(id) {
    this._bookService.deleteOne(id).subscribe(next => {
      window.location.reload();
    });

  }

  goToForm() {
    this._router.navigateByUrl('books/books-form');

  }

  //new
  update(id) {
    this._router.navigateByUrl('books/books-form/' + id);

  }

};