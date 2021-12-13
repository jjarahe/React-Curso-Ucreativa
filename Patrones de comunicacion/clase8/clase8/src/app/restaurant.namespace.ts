export namespace RestaurantNameSpace{
  export interface Restaurant {
    name?: string; //El signo de pregunta significa que puede ser nulo.
    address?: string;
    stars?: number;
    dateCreated?: Date;
    status?: RestaurantEnum;
    isDeleted?: boolean;
  }

  export enum RestaurantEnum{
    OPENED = 'Abierto',
    CLOSED = 'Cerrado'
  }
}
