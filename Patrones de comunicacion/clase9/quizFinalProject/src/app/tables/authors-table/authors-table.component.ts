import { Component, OnInit } from '@angular/core';
import { DataNameSpace } from 'src/app/data.namespace';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-authors-table',
  templateUrl: './authors-table.component.html',
  styleUrls: ['./authors-table.component.css']
})
export class AuthorsTableComponent implements OnInit {

  public authorsStored: Array<DataNameSpace.Author> = [];

  public authorSelected: DataNameSpace.Author = {
    name: '',
    books: []
  };

  public showBooks(author: DataNameSpace.Author){
    this.authorSelected = author;
    console.log("Author selected*********************************"+JSON.stringify(this.authorSelected,null,4))
  }

  constructor(private _authorService: DataService) {
    this.authorsStored = _authorService.authors;
  }

  ngOnInit(): void {
  }

}
