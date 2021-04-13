import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule,} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSliderModule,
    MatMenuModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MatToolbarModule,
    MatSliderModule,
    MatMenuModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule
  ], 
})
export class CoreModule { }
