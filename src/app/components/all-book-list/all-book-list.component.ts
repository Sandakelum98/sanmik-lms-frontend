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
    console.log('loanBook working');

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

}
