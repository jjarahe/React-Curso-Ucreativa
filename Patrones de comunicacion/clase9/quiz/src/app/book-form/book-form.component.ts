import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthorNameSpace } from '../author.namespace';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  public authorID: string = '';

  public book: AuthorNameSpace.Book = {
    name: '',
    year: 0,
    bookGenre: ''
  }

  public authors: Array<AuthorNameSpace.Author> = []


  public onSubmit(authorID: string){
    console.log("AuthorID: "+ authorID)


          this.authors.find((obj, index) => {
            if(obj.id == authorID){
               obj.Books?.push({...this.book})
            }
         }
         )

     /*

     this.authors.forEach(author => {
                                     if(author.id == authorID){
                                       console.log("Este es el autor del foreach: "+ JSON.stringify(author))
                                       author.Books?.push({...this.book})
                                       console.log(JSON.stringify(author.Books))
                                     }
                                    }
                          )


     let index: number;
    if(this.authors.find(obj => obj.id == authorID)){
      index = this.authors.indexOf(this.authors.find(obj => obj.id == authorID))
    }

    console.log("INDEX: "+ index)
    this.author = this.authors.find(obj => obj.id === authorID)
    this.author?.Books?.push(this.book)


    */
   alert("Se registro el Libro!")
   console.log(this.book)
   console.log(this.authors)

}

  constructor(private _authorService: AuthorService) {
    this.authors = this._authorService.authors;
   }

  ngOnInit(): void {
  }

}
