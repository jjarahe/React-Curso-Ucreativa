import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RestaurantNameSpace } from '../restaurant.namespace';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public restaurant: RestaurantNameSpace.Restaurant = {
    name:'',
    address:'',
    stars: 0,
    status: RestaurantNameSpace.RestaurantEnum.CLOSED,
    isDeleted: false
  }

  onSubmit(){
    this.restaurant.dateCreated = new Date();
    console.log(this.restaurant);
    this._restaurantService.restaurants.push({...this.restaurant}) //Estos datos son del servicio.
    console.log(this._restaurantService.restaurants)
    alert("El restaurante ha sido creado exitosamente!");
  }

  constructor(private _restaurantService: RestaurantService) { }//Se inicializa el Servicio por medio de una instancia Singleton

  ngOnInit(): void {
  }

}
