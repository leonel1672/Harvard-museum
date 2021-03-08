import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxMasonryModule } from 'ngx-masonry';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ImageViewerModule } from '@nghacks/image-viewer';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OverlayGalleryComponent } from './components/overlay-gallery/overlay-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverlayGalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgxMasonryModule,
    ImageViewerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
