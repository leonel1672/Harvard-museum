import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxMasonryModule } from "ngx-masonry";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { of } from "rxjs";
import { AppComponent } from "./app.component";
import { OverlayGalleryComponent } from "./components/overlay-gallery/overlay-gallery.component";
import { GalleryService } from "./services/gallery.service"

let responseGallery = {
    info: {
        next: '',
        page: 1,
        pages: 23645,
        totalrecords: 236445,
        totalrecordsperquery: 10
    },
    records: [
        {
            title: 'Seated Bodhisattva Târâ in her “Green Manifestation',
            primaryimageurl: '',
            objectnumber: '',
            classification: ''
        }
    ]
}

describe('AppComponent', () => {
    let service: GalleryService;
    let spinner: NgxSpinnerService;
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, OverlayGalleryComponent],
            imports: [
                HttpClientTestingModule,
                MatDialogModule,
                NgxMasonryModule,
                NgxSpinnerModule,
                BrowserAnimationsModule
            ],
            providers: [
                GalleryService
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        }).compileComponents()
    })

    beforeEach( () => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        service = fixture.debugElement.injector.get(GalleryService);
        spinner = fixture.debugElement.injector.get(NgxSpinnerService);
        fixture.detectChanges();
    })

    it('should create AppComponent', () => {
        expect(component).toBeTruthy();
    })

    it('loadGallery', () => {
        let page:number = 1;
        let spinnerShow = spyOn(spinner, 'show');
        let getGallerySpy = spyOn(service, 'getGallery').and.returnValue(of(responseGallery));
        let spinnerHide = spyOn(spinner, 'hide');
        component.loadGallery(page);
        expect(spinnerShow).toHaveBeenCalled();
        expect(getGallerySpy).toHaveBeenCalled();
        expect(component.galleryData.length).toBeGreaterThan(0);
        expect(component.totalPages).toBeGreaterThan(0);
        expect(component.pageNumber).not.toBe(0);
        expect(spinnerHide).toHaveBeenCalled();
    });

    it('addToGallery', () => {
        let page: number = 2;
        let getGallerySpy = spyOn(service, 'getGallery').and.returnValue(of(responseGallery));
        let spinnerHide = spyOn(spinner, 'hide');
        component.addToGallery(page);
        expect(getGallerySpy).toHaveBeenCalled();
        expect(spinnerHide).toHaveBeenCalled();
    })

    it('loadNewPaintings', () => {
        component.totalPages = 23645;
        component.pageNumber = responseGallery.info.page;
        let spinnerShow = spyOn(spinner, 'show');
        let getGallerySpy = spyOn(service, 'getGallery').and.returnValue(of(responseGallery));
        component.loadNewPaintings()
        expect(spinnerShow).toHaveBeenCalled();
        expect(component.pageNumber).toBeGreaterThan(responseGallery.info.page)
        expect(getGallerySpy).toHaveBeenCalled();
    })

    it('the maximum number of pages loaded is reached', () => {
        component.totalPages = 23645;
        component.pageNumber = 23646;
        component.loadNewPaintings()
        expect(component.lastPage).toBeTruthy()
    })

    it('showPaitingOverlay', () => {
        let urlImage = "https://nrs.harvard.edu/urn-3:HUAM:DDC103437_dynmc";
        let dialogSpy = spyOn(component.dialog, 'open');
        component.showPaitingOverlay(urlImage);
        expect(dialogSpy).toHaveBeenCalled();
    })
})