import { Injectable } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class NewsService {

  constructor(
    private http:Http
  ) {}

   public getJSON(): Observable<any> {
        return this.http.get("../assets/json/news.json")
                        .map((res:any) => res.json())
                        .catch((error:any) => this.handleError(error));

    }
    public handleError = (error: any): Observable < any > => {
      console.dir(error);
      let errMsg: any = {};
      if (typeof error._body !== 'object') errMsg = JSON.parse(error._body);
      errMsg.status = error.status;
      console.error('REST SERVICE', errMsg); // log to console instead
      return Observable.throw(errMsg);
    }

}
