export namespace AuthorNameSpace{
  export interface Author {
    name: string;
    lastname: string;
    id: string;
    birthdate: Date;
    favoriteGenre: string;
    Books?: Array<Book>;
  }

  export interface Book {
    name: string;
    year: number;
    bookGenre: string;
  }
}
