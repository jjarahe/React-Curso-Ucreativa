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

  public index: number = 0

  public onSubmit(){
    console.log("Author Antes del Book: "+ JSON.stringify(this._authorService.authors,null,4))
    console.log("Author ID*******: "+this.authorID)
    console.log("Este es el objeto encontrado *************************"+JSON.stringify(this._authorService.authors.find(obj => obj.id == this.authorID)))

    const author = this._authorService.authors.find( obj => obj.id == this.authorID)

    if(author) {
      author.books.push({...this.book})
      console.log("AQUIII")
    }
/*
    this.index = this._authorService.authors.findIndex( obj => obj.id === this.authorID)
    console.log("********************INDEX****************"+this.index)

    this._authorService.authors[this.index].books.push({...this.book})*/
    /*this.authors.find(({id}, index) => {
      if(id === this.authorID){
        this.authors[index].books.push({...this.book})
      }
    })*/
    alert("Se registro el Libro!");
    console.log(JSON.stringify(this._authorService.authors,null,4));

}

  constructor(private _authorService: AuthorService) {
    this.authors = _authorService.authors
  }

  ngOnInit(): void {
  }

}
