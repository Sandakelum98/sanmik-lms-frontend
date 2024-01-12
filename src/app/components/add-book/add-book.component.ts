import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent implements OnInit {

  constructor(private bookService: BookService, private toastr: ToastrService) { }

  authorDropDown = new Array();
  selectedAuthorId: number;
  bookTitle: string = '';

  ngOnInit() {
    this.bookService.getAuthors().subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.authorDropDown = resp.data
      }, error(err) {
        this.toastr.error('Getting authors faied');
      },
    })
  }

  handleSelectAuthor() {
    console.log(this.selectedAuthorId);
    this.selectedAuthorId = this.selectedAuthorId
  }

  addNewBook() {
    console.log('addNewBook');

    console.log('Book Title:', this.bookTitle);
    console.log('Selected Author ID:', this.selectedAuthorId);


    if (!this.bookTitle || this.bookTitle.trim() === '') {
      this.toastr.warning('Cannot empty book title');
    } else if (this.selectedAuthorId === null || this.selectedAuthorId === undefined) {
      this.toastr.warning('Please select an author');
    } else {

      const newBook = {
        "title": this.bookTitle,
        "authorId": this.selectedAuthorId
      }

      this.bookService.addBook(newBook).subscribe({
        next: (res: any) => {
          console.log(res);

          // clear input fields after successfully adding the book
          this.bookTitle = '';
          this.selectedAuthorId = null;

          this.toastr.success('Book successfully added');
        }, error: (err: any) => {
          console.log(err);
          this.toastr.error('Book adding faied');

        },
      })

    }

  }

}
