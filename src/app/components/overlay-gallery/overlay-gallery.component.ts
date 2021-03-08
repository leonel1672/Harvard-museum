import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-overlay-gallery',
  templateUrl: './overlay-gallery.component.html',
  styleUrls: ['./overlay-gallery.component.css']
})
export class OverlayGalleryComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {image: string}) { }

  ngOnInit(): void {
  }

}
