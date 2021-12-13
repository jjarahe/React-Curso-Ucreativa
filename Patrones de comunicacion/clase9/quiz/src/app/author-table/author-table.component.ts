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

  constructor(private _authorService: AuthorService) {
    this.authors = this._authorService.authors;
   }

  ngOnInit(): void {
  }

}
