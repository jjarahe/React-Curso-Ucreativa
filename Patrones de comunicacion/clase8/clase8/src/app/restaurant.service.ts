import { Injectable } from '@angular/core';
import { RestaurantNameSpace } from './restaurant.namespace';

@Injectable({ //El decorador siempre se implementa con @
  providedIn: 'root' //ese root lo que permite es que el servicio pueda funcionar en todos los modulos.
})
export class RestaurantService {

public restaurants: Array<RestaurantNameSpace.Restaurant> = [];

  constructor() { }
}
