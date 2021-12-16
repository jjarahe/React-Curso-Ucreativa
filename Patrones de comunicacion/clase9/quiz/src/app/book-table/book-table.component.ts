import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { AuthorNameSpace } from '../author.namespace';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

  @Input() authorName?: string = '';
  @Input() books?: Array<AuthorNameSpace.Book> = [];

  //public books?: Array<AuthorNameSpace.Book> = this.authorSelected.books;

  //public authorName?: string = this.authorSelected.name;


  //Todo lo de abajo es mi codigo
/*
  public authors: Array<AuthorNameSpace.Author> = [];
  public books: Array<AuthorNameSpace.Book> = [];
  public authorName: string = '';

  constructor(private _authorService: AuthorService) {
    this.authors = _authorService.authors;
     /* console.log("Estoy en el constructor de la tabla de libors")
      this.authors = _authorService.authors;
      this.authorName = _authorService.authors[_authorService.index].name;
      this.books = _authorService.authors[_authorService.index].books;
      this.index = _authorService.index;*//*
  }*/
  constructor() {}

  ngOnInit(): void {
  }

}
