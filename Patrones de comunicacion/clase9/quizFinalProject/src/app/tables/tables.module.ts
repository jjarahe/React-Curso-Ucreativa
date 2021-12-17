import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksTableComponent } from './books-table/books-table.component';
import { AuthorsTableComponent } from './authors-table/authors-table.component';



@NgModule({
  declarations: [
    BooksTableComponent,
    AuthorsTableComponent
  ],
  exports: [
    AuthorsTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TablesModule { }
