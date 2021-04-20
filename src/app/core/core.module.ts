import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { BookService } from './services/http/book.service';
import { AuthorService } from './services/http/author.service';
import { KindService } from './services/http/kind.service';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  providers: [
    BookService,
    AuthorService,
    KindService,
  ]
})
export class CoreModule { }
