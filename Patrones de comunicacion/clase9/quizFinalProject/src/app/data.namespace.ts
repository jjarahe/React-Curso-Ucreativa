export namespace DataNameSpace {
  export interface Author {
    name?: string;
    lastName?: string;
    id?: string;
    birthdate?: Date;
    favoriteGenre?: string;
    books?: Array<Book>;
  }

  export interface Book {
    name: string;
    year: number;
    bookGenre: string;
  }

  export interface User {
    username: string;
    password: string;
    createdDate?: Date;
  }

  export interface Genre {
    name: string;
  }

}
