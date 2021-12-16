export namespace AuthorNameSpace{
  export interface Author {
    name?: string;
    lastname?: string;
    id?: string;
    birthdate?: Date;
    favoriteGenre?: string;
    books?: Array<Book>;
  }

  export interface Book {
    name: string;
    year: number;
    bookGenre: string;
    idAuthor: string;
  }
}
