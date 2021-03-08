import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayGalleryComponent } from './overlay-gallery.component';

describe('OverlayGalleryComponent', () => {
  let component: OverlayGalleryComponent;
  let fixture: ComponentFixture<OverlayGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
