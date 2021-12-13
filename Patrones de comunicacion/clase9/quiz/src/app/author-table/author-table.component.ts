import { Component, OnInit } from '@angular/core';
import { AuthorNameSpace } from '../author.namespace';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-table',
  templateUrl: './author-table.component.html',
  styleUrls: ['./author-table.component.css']
})
export class AuthorTableComponent implements OnInit {

  public authors: Array<AuthorNameSpace.Author> = [];
  public authorIndex?: number;

  public authorName: string = '';
  public id: string = '';
  public books: Array<AuthorNameSpace.Book> = [];
  public authorBooks?: Array<AuthorNameSpace.Book> = [];


  public showBooks(index: number) {
    this.authorIndex = index;
    this.id = this.authors[index].id
    this.authorName = this.authors[index].name
    this.authorBooks = this.books.filter(obj => obj.idAuthor == this.id)
    console.log("Este es el INDEX: " + this.authorIndex)
  }


  constructor(private _authorService: AuthorService, private _bookService: AuthorService) {

    this.books = this._bookService.books
    this.authors = this._authorService.authors;
  }

  ngOnInit(): void {
  }

}
