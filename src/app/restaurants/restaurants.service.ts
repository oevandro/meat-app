import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import  "rxjs/add/operator/map";
import  "rxjs/add/operator/catch";
import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";
import { MEAT_API } from "../app.api";
import { ErrorHandler } from "../app.error-handler";

@Injectable()

export class RestaurantsService {

    constructor(private http: Http){}     
    //Retorna todos os Restaurantes
    restaurants(): Observable<Restaurant[]>{
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError)
    }
    
      //Retorna  o Restaurante por ID
      restaurantById(id: string): Observable<Restaurant>{
          return this.http.get(`${MEAT_API}/restaurants/${id}`)
          .map(response => response.json())
          .catch(ErrorHandler.handlerError)
      }
      
    //Retorna os Reviews de Um Restaurante
    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError)
    }
    
  //Retorna os Menu de Um Restaurante
  menuOfRestaurant(id: string): Observable<MenuItem[]>{
      return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError)
  }
}