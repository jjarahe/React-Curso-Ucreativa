import { Component, OnInit } from '@angular/core';
import { AuthorNameSpace } from '../author.namespace';
import { AuthorService } from '../author.service';
import { Genre } from '../genre.interface';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

  public genres: Array<Genre> = [{name:'Crimen'},
                            {name:'Religion'},
                            {name:'Misterio'},
                            {name:'Motivacion Personal'},
                            {name:'Ciencia Ficcion'},
                            {name:'Fantasia'},
                            {name:'Terror'},
                          ];

  public author: AuthorNameSpace.Author = {
    name: '',
    lastname: '',
    id: '',
    favoriteGenre: '',
    birthdate: new Date(),
    books: [],
  };

  onSubmit(){
    this._authorService.authors.push({...this.author});
    console.log(this.author);
    console.log(this._authorService.authors);
    alert("Se ha creado un nuevo Autor!");
    this.resetAuthor()
  }

  private resetAuthor(){
    this.author = {
      name: '',
      lastname: '',
      id: '',
      favoriteGenre: '',
      birthdate: new Date(),
      books: [],
    }
  }

  constructor(private _authorService: AuthorService) { }

  ngOnInit(): void {
  }

}
