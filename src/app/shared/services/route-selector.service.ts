import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RouteSelectorService {

  constructor(private http: HttpClient) { }

  public getRoutes(): Observable<any> {
    return this.http.get<any[]>(environment.apiUrl + 'routes');
  }

  public getDirections(route_id: string): Observable<any> {
    return this.http.get<any[]>(environment.apiUrl + 'directions/' + route_id);
  }

  public getStops(route_id: string, direction_id: string): Observable<any> {
    return this.http.get<any[]>(environment.apiUrl + 'stops/' + route_id + '/' + direction_id);
  }
  
  public getDepartures(route_id: string, direction_id: string, stop_id: string): Observable<any> {
    return this.http.get<any[]>(environment.apiUrl + route_id + '/' + direction_id + '/' + stop_id);
  }

}
