import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Company} from './entity';
import {StockExchange} from './entity';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:8080/admin/";


createCompany(company: Company):Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.url+'company', company, options)
        .map(success => success.status)
        .catch(this.handleError);
} 

createStock(StockExchange stock):Observable<number> {
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: cpHeaders });
  return this.http.post(this.url+'stocks', stock, options)
      .map(success => success.status)
      .catch(this.handleError);
} 
listCompany(): Observable<Article> {
  return this.http.get(this.url+'listCompany', options)
    .map(this.extractData)
    .catch(this.handleError);
} 

updateCompany(company: Company):Observable<number> {
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: cpHeaders });
  return this.http.put(this.url, company, options)
        .map(success => success.status)
        .catch(this.handleError);
} 



}
