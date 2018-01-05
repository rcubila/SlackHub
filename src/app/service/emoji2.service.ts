import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';
import 'rxjs/Rx';
import {from} from 'rxjs/observable/from';
import {Observable} from "rxjs/Observable";


@Injectable()
export class Emoji2Service {
  constructor(private http: Http) {
  }

  getEmoji2(): Observable<any> {
    return this.http.get("http://localhost:8080/emoji2")
      .map(res => res.json());
  }

}
