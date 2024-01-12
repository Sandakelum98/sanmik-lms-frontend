import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-all-book-list',
  templateUrl: './all-book-list.component.html',
  styleUrls: ['./all-book-list.component.css']
})

export class AllBookListComponent implements OnInit {

  constructor(private bookService: BookService, private toastr: ToastrService) { }

  books: any[] = [];

  ngOnInit(): void {
    this.geAllBooks();
  }

  geAllBooks() {
    this.bookService.getAllBooks().subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.books = resp.data;

      }, error(err) {
        this.toastr.error('Getting books faied');
      },
    })
  }

  loanBook(bookId: number) {
    const book = {
      "bookId": bookId
    }

    this.bookService.loanBook(book).subscribe({
      next: (res: any) => {

        console.log(res);
        this.toastr.success('Loan book successfully');
        this.geAllBooks();

      }, error: (err: any) => {
        console.log(err);
        this.toastr.error('Loan book faied');

      },
    })

  }

  returnBook(bookId: number) {
    this.bookService.returnBook(bookId).subscribe({
      next: (res: any) => {

        console.log(res);
        this.toastr.success('Book successfully returned');
        this.geAllBooks();

      }, error: (err: any) => {
        console.log(err);
        this.toastr.error('Book return faied');

      },
    })
  }

  searchText: string = '';

  searchBook() {
    console.log(this.searchText);

    const book = {
      "searchText": this.searchText
    }

    this.bookService.searchBook(book).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.books = resp.data;
      }, error(err) {
        this.toastr.error('Search books faied');
      },
    })
  }

}
