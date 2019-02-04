import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  // get tees

  getTees(): Observable<[]> {
    return this.http.get('https://golf-courses-api.herokuapp.com/courses/11819').pipe(
      map(res => res['data']['holes'][0]['teeBoxes']
        .map((i: {}) => i['teeType'])
      )
    );
  }

  // get holes

  getHoles(tee: number): Observable<[]> {
    return this.http.get('https://golf-courses-api.herokuapp.com/courses/11819').pipe(
      map(res => res['data']['holes']
        .map((i: {}) => i['teeBoxes'][tee])
      )
    );
  }

}
