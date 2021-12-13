import { Injectable } from '@angular/core';
import { AuthorNameSpace } from './author.namespace';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  public authors: Array<AuthorNameSpace.Author> = []
  public books: Array<AuthorNameSpace.Book> = []
  constructor() { }

}
