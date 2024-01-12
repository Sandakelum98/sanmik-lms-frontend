import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/author/get-all-author`);
  }

  addBook(newBook: any): Observable<any> {
    return this.http.post(`${environment.BASE_URL}/book/add-new-book`, newBook);
  }

  getAllBooks(): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/book/get-all-books`);
  }

  loanBook(book: any): Observable<any> {
    return this.http.post(`${environment.BASE_URL}/book-loan/add-book-loan`, book);
  }

}
