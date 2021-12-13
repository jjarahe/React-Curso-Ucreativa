import { CompileShallowModuleMetadata } from '@angular/compiler';
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

  public authorID: string = '';

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
    bookGenre: ''
  }

  public authors: Array<AuthorNameSpace.Author> = []


  public onSubmit(){
    console.log("Author Antes del Book: "+ JSON.stringify(this.authors,null,4))
    this.authors.find((obj) => obj.id == this.authorID)?.books.push(this.book);
    alert("Se registro el Libro!");
    console.log(JSON.stringify(this.authors,null,4));

}

  constructor(private _authorService: AuthorService) {
    this.authors = this._authorService.authors;
   }

  ngOnInit(): void {
  }

}
