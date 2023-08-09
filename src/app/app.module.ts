import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBar } from './search-bar/search-bar.component';
import { DisplayData } from './display-data/display-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBar,
    DisplayData
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
