import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Result } from './result';
import { SearchComponent } from './search/search.component';

const url = `https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${this.inputValue}`;
@Injectable()
export class SearchResultService {
  constructor(private http: HttpClient) { }
  public myValue: string;
  getInfo(): Observable<Result[]> {
    return this.http.get(url)
      .map(({ response: listings }: any) => listings)
      .map(({ listings }: any) => (
        listings.map(({ img_url: imgUrl, price, title, price_currency: priceCurrency }: any) => ({
          imgUrl,
          price,
          title,
          priceCurrency
        })
        )))
  }
}