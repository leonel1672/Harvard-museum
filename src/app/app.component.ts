import { Component, OnInit } from '@angular/core';
import { animate, style } from '@angular/animations';
import { NgxSpinnerService } from 'ngx-spinner';
import { GalleryService } from './services/gallery.service';
import { Painting } from './models/item-gallery/item-gallery.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  galleryData: Painting[] = [];
  pageNumber: number = 1;
  lastScroll: boolean = false;
  totalPages: number = null;

  constructor(
    private gs: GalleryService,
    private spinner: NgxSpinnerService
  ){}

  ngOnInit(){}

  loadGallery(){}

  addToGallery(){}

  loadNewPaintings(){}

}
