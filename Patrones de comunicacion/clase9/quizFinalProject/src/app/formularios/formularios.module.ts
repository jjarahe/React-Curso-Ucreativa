import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from './book-form/book-form.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookFormComponent,
    AuthorFormComponent
  ],
  exports: [
    AuthorFormComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormulariosModule { }
