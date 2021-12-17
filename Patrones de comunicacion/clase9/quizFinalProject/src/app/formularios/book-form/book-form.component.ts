import { Component, OnInit } from '@angular/core';
import { DataNameSpace } from 'src/app/data.namespace';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  public genres: Array<DataNameSpace.Genre> = [{name:'Crimen'},
                                                {name:'Religion'},
                                                {name:'Misterio'},
                                                {name:'Motivacion Personal'},
                                                {name:'Ciencia Ficcion'},
                                                {name:'Fantasia'},
                                                {name:'Terror'},
                                              ];

  public book: DataNameSpace.Book = {
    name: '',
    year: 0,
    bookGenre: '',
  };

  public authorsStored: Array<DataNameSpace.Author> = [];

  public index = 0;

  public onSubmit(){
    console.log(`*************Libro por Guardar************* ${this.book}`);
    this.registerBookIntoAuthor()
    console.log(`Libro ${this.book.name} se registro correctamente en el author ${this._authorService.authors[this.index].name}`)
  }

  private registerBookIntoAuthor(){
    this._authorService.authors[this.index].books?.push({...this.book})
  }

  constructor(private _authorService: DataService) {
    this.authorsStored = _authorService.authors
  }

  ngOnInit(): void {
  }

}
