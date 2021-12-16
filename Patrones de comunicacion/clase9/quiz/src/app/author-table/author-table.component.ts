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

  public authorSelected: AuthorNameSpace.Author = {
    books: []
  }

  public showBooks(author: AuthorNameSpace.Author) {
    this.authorSelected = author;
    /*this.authorIndex = index;
    this.id = this.authors[index].id
    this.authorName = this.authors[index].name
    this.authorBooks = this.books.filter(obj => obj.idAuthor == this.id)
    console.log("Este es el INDEX: " + this.authorIndex)*/
  }


  constructor(private _authorService: AuthorService, private _bookService: AuthorService) {
    this.authors = this._authorService.authors;
  }

  ngOnInit(): void {
  }

}
