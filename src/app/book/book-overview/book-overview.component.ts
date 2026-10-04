import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-overview',
  standalone: false,
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss']
})
export class BookOverviewComponent implements OnInit {
  books$;

  constructor(private book: BookService, private router: Router) {}

  ngOnInit() {
    this.books$ = this.book.findAll();
  }

  showBook(book: Book): void {
    this.router.navigate(['/book', book.id]);
  }

  newBook(): void {
    this.router.navigate(['/book']);
  }
}
