import { Injectable } from '@angular/core';
import { Observable, sample } from 'rxjs';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../shared/models/food';
import { Tags } from '../shared/models/Tags';
import { HttpClient } from '@angular/common/http';
import { FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL, FOOD_BY_ID_URL } from '../shared/models/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL);
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }
  getAllTags(): Observable<Tags[]>{
    return this.http.get<Tags[]>(FOODS_TAGS_URL);
  }
  getAllFoodsByTag(tag:string): Observable<Food[]>{

    return tag == "All"?
    this.getAll():
    this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }
  getFoodById(foodId:string): Observable<Food>{
    return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
  }
}
