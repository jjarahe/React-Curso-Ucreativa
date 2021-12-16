import { Component, OnInit } from '@angular/core';
import { AuthorNameSpace } from '../author.namespace';
import { AuthorService } from '../author.service';
import { Genre } from '../genre.interface';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {


  public genres: Genre[] = [{name:'Crimen'},
  {name:'Religion'},
  {name:'Misterio'},
  {name:'Motivacion Personal'},
  {name:'Ciencia Ficcion'},
  {name:'Fantasia'},
  {name:'Terror'},
];


  public book: AuthorNameSpace.Book = {
    name: '',
    year: 0,
    bookGenre: '',
    idAuthor: '',
  }
  public books: Array<AuthorNameSpace.Book> = []

  public authors: Array<AuthorNameSpace.Author> = []


  public index: number = 0

  public onSubmit(){
    console.log(this.book)
    this.books.push({...this.book})
    alert("Se registro el Libro!");
    console.log(JSON.stringify(this._authorService.authors,null,4));
    this.registerAuthorBook();
  }

  private registerAuthorBook(){
    this._authorService.authors[this.index].books?.push({...this.book})
  }

  constructor(private _authorService: AuthorService, private _bookService: AuthorService) {
    this.authors = _authorService.authors
    this.books = _bookService.books
  }

  ngOnInit(): void {
  }

}
