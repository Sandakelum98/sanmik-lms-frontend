import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token')
    let cloned = token ? request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + token)
    }) : request.clone();


    return next.handle(cloned)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            localStorage.clear();
            localStorage.clear();
            this.router.navigate(['/login']);
          } else {
            return throwError(() => error);
          }

          return throwError(() => error);
        })
      )
  }
}
