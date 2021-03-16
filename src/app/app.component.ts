import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GalleryService } from './services/gallery.service';
import { Painting } from './models/item-gallery/item-gallery.model'
import { animate, style } from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import { OverlayGalleryComponent } from './components/overlay-gallery/overlay-gallery.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  galleryData: Painting[] = [];
  pageNumber: number = 1;
  totalPages: number = null;
  lastPage: boolean = false
  animations = {
    show: [
      style({opacity: 0}),
      animate('400ms ease-in', style({opacity: 1})),
    ],
    hide: [
      style({opacity: '*'}),
      animate('400ms ease-in', style({opacity: 0})),
    ]
  };
  masonryOptions = {
    columnWidth: 10,
    gutter: 30,
    stamp: 'stamp',
    fitWidth: true,
    originLeft: true,
    originTop: true,
    resize: true,
    initLayout: true,
    horizontalOrder: true,
    animations: this.animations
  }

  constructor(
    private gs: GalleryService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog
  ){}

  ngOnInit(){
    this.loadGallery(this.pageNumber)
  }

  loadGallery(indexPage: number){
    this.spinner.show();
    this.gs.getGallery(indexPage).subscribe( paitingData => {
      this.galleryData = paitingData['records'];
      this.totalPages = paitingData['info'].pages;
      this.pageNumber = paitingData['info'].page;
      this.spinner.hide();
    })
  }

  addToGallery(indexPage: number){
    this.gs.getGallery(indexPage).subscribe( paitingData =>{
      for(let data of paitingData['records']){
        this.galleryData.push(data)
      }
      this.spinner.hide()
    })
  }

  loadNewPaintings(){
    if(this.totalPages > this.pageNumber){
        this.spinner.show();
        this.pageNumber ++;
        this.addToGallery(this.pageNumber)
    }else {
      this.lastPage = true
    }
  }

  showPaitingOverlay(urlImage){
    this.dialog.open(OverlayGalleryComponent, {
      data: {image: urlImage},
      width: '600px',
    });
  }
}
 






