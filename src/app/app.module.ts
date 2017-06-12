import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsboardComponent } from './components/newsboard/newsboard.component';
import { HttpModule } from '@angular/http';

import {NewsService} from '../services/news.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsboardComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
