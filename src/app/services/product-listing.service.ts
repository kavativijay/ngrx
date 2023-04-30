import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListingService {

  private url = 'https://dummyjson.com';
  selected_item:any;

  constructor(private http: HttpClient) { }


  getProducts():Observable<any> {
    return this.http.get(this.url + '/products')
  }
}
