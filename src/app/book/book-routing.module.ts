import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookComponent } from './book.component';
import { BookFormComponent } from './pages/book-form/book-form.component';

const routes: Routes = [
  {
    path: '', component: BookComponent,
    children: [
      {
        path: '', redirectTo: 'books-list', pathMatch: 'full'
      },
      {
        path: 'books-list', component: BookListComponent

      },
      {
        path: 'books-form', component: BookFormComponent

      },
      {
        path: "books-form/:id", component: BookFormComponent
      },
      {
        path: '**', component: NotFoundComponent
      }
    ]
  }, {
    path: '**', component: NotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
