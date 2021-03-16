import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { GalleryService } from "./gallery.service"

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

let urlBase: string = "https://api.harvardartmuseums.org"
let options = {
    params: {
      apikey: '0000-0000-0000-0000',
      sort: 'rank',
      sortorder: 'asc',
      page: null
    }
}

describe('galleryService', () => {
    let service: GalleryService;
    let httpMock: HttpTestingController;

    beforeEach( () => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [GalleryService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        })
    })

    beforeEach( () => {
        service = TestBed.inject(GalleryService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach( () => {
        httpMock.verify();
    });

    it('getGallery', () => {
        let page = 2;
        service.getGallery(page).subscribe(res => {
            expect(res).toEqual(responseGallery);
        })

        const req = httpMock.expectOne('https://api.harvardartmuseums.org/object?apikey=b69c55ec-ae48-429b-b88c-5732213d8e72&sort=rank&sortorder=asc&page=2');
        req.flush(responseGallery);
    })
})