import { Component, OnInit } from '@angular/core';
import { RestaurantNameSpace } from '../restaurant.namespace';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public restaurants: Array<RestaurantNameSpace.Restaurant> = [];

  public status = RestaurantNameSpace.RestaurantEnum;

  public changeRestaurantStatus(index: number, newStatus: RestaurantNameSpace.RestaurantEnum){
    this.restaurants[index].status = newStatus;
    //this._restaurantService.restaurants[index].status = newStatus;
  }

  public deleteRestaurant(index: number, isDeleted: boolean){
    this.restaurants[index].isDeleted = isDeleted;
    //this._restaurantService.restaurants[index].deleted = isDeleted;
  }

  constructor(private _restaurantService: RestaurantService) {
    this.restaurants = this._restaurantService.restaurants;
   }

  ngOnInit(): void {
  }

}
