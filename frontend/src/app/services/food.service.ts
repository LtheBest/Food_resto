import { Injectable } from '@angular/core';
import { sample } from 'rxjs';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../shared/models/food';
import { Tags } from '../shared/models/Tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(Food => Food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }
  getAllTags():Tags[]{
    return sample_tags
  }
  getAllFoodsByTag(tag:string):Food[]{

    return tag == "All"?
    this.getAll():
    this.getAll().filter(Food => Food.tags?.includes(tag));
  }
  getFoodById(foodId:string):Food{
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }
}
