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

  public genres: Genre[] = [{name:'Crimen'},
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
    books: new Array<AuthorNameSpace.Book>()
  }

  onSubmit(){
    this._authorService.authors.push({...this.author});
    console.log(this._authorService.authors)
    alert("Se ha creado un nuevo Autor!")
  }

  constructor(private _authorService: AuthorService) { }

  ngOnInit(): void {
  }

}
