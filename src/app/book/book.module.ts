import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookComponent } from './book.component';
import { SharedModule } from '../shared/shared.module';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import { BookFormComponent } from './pages/book-form/book-form.component';

@NgModule({
  declarations: [BookListComponent, BookComponent, BookFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    BookRoutingModule
  ]
})
export class BookModule { }
