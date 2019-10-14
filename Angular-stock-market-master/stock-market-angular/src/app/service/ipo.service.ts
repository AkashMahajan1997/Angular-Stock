import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IOP} from '../entity';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class IpoService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:8080/iop/";

  updateIop(iop: IOP):Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.put("http://localhost:8080/admin/updateIop", iop, options)
          .map(success => success.status)
          .catch(this.handleError);
  } 

}
