import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse, HttpHeaders  } from '@angular/common/http';

import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Rooms } from './rooms';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  private apiServer = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  create(rooms): Observable<Rooms> {
    return this.httpClient.post<Rooms>(this.apiServer + '/rooms/', JSON.stringify(rooms), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  getById(id): Observable<Rooms> {
    return this.httpClient.get<Rooms>(this.apiServer + '/rooms/' + id)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  getAll(): Observable<Rooms[]> {
    return this.httpClient.get<Rooms[]>(this.apiServer + '/rooms/')
    .pipe(
      catchError(this.errorHandler)
    );
  }

  update(id, rooms): Observable<Rooms> {
    return this.httpClient.put<Rooms>(this.apiServer + '/rooms/' + id, JSON.stringify(rooms), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  delete(id) {
    return this.httpClient.delete<Rooms>(this.apiServer + '/rooms/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  errorHandler(error) {
     let errorMessage = '';
     if (error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
