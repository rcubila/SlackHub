import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";

@Injectable()
export class JokeService {
  constructor(private http: Http) { }

  getJoke(): Observable<any>{
    return this.http.get("http://localhost:8080/joke")
      .map(res=>res.json());
  }

}


