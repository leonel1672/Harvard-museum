import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxMasonryModule } from 'ngx-masonry';

import { AppComponent } from './app.component';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserAnimationsModule,
    GalleryItemComponent,
    HttpClientModule,
    InfiniteScrollModule,
    NavbarComponent,
    NgxMasonryModule,
    NgxSpinnerModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
