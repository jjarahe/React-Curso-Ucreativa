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
  public showBooksTable: boolean = false;
  public authorName: string = '';
  public books: Array<AuthorNameSpace.Book> = [];


  public showBooks(index: number){
    this.authorIndex = index;
    this.authorName = this.authors[index].name
    this.books = this.authors[index].books
    console.log("Este es el INDEX: "+ this.authorIndex)
  }


  constructor(private _authorService: AuthorService) {
    this.showBooksTable = false;
    this.authors = this._authorService.authors;
   }

  ngOnInit(): void {
  }

}
