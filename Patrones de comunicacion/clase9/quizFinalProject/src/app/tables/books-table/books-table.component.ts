import { Component, Input, OnInit } from '@angular/core';
import { DataNameSpace } from 'src/app/data.namespace';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css']
})
export class BooksTableComponent implements OnInit {

  @Input() authorName?: string = '';
  @Input() books?: Array<DataNameSpace.Book> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
