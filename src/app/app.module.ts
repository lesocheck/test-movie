import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AutocompleteModule } from 'ng2-input-autocomplete';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { CinemaItemComponentComponent } from './components/cinema-item-component/cinema-item-component.component';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    CinemaItemComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AutocompleteModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
