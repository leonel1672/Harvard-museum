import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private apikey: string = 'b69c55ec-ae48-429b-b88c-5732213d8e72';
  private urlBase: string = "https://api.harvardartmuseums.org";
  private options = {
    params: {
      apikey: this.apikey,
      sort: 'rank',
      sortorder: 'asc',
      page: null
    }
  }

  constructor( private _http: HttpClient ) { }

  getGallery(page: number ){
    this.options.params.page = page.toString()
    return this._http.get(`${this.urlBase}/object`, this.options);
  }

}
