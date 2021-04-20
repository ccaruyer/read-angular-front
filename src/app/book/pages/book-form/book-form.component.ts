import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Author } from 'src/app/core/models/author';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/core/models/book';
import { Kind } from 'src/app/core/models/kind';
import { KindFormData } from 'src/app/core/models/kind-form-data';
import { AuthorService } from 'src/app/core/services/http/author.service';
import { BookService } from 'src/app/core/services/http/book.service';
import { KindService } from 'src/app/core/services/http/kind.service';
import { KindRoutingModule } from 'src/app/kind/kind-routing.module';
import { KindFormComponent } from 'src/app/kind/pages/kind-form/kind-form.component';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;
  book: Book;
  putRequest: boolean = false;
  idKind: number;
  idAuthor: number;
  kinds: Observable<Kind[]>;
  authors: Observable<Author[]>;
  kindForm: FormGroup;
  formAction: string;


  constructor(
    private fb: FormBuilder,
    private _bookService: BookService,
    private _route: Router,
    private route: ActivatedRoute,
    private _kindService: KindService,
    private _authorService: AuthorService,
    private fb2: FormBuilder,

  ) {


    this.bookForm = this.fb.group({
      title: ['', [Validators.required, this.noWhitespaceValidator]],
      summary: ['', [Validators.required, this.noWhitespaceValidator]],
      author: [this.idAuthor],
      kind: [this.idKind],
    });


  }

  ngOnInit(): void {
    this.kinds = this._kindService.get();
    this.authors = this._authorService.get();
  }


  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;

    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  onSubmit(book: Book) {
    if (this.bookForm.valid) {
      if (!this.putRequest) {
        //post
        this._bookService.post(book).subscribe(next => {
          console.log("Book:", next);
          this.bookForm.reset();
          this._route.navigateByUrl("books");
        })
      }
    }
  }
}
