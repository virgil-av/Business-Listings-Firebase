import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map'
import {Category} from "../shared/category";
import {Business} from "../shared/business";

@Injectable()
export class FirebaseService {
  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Category[]>;

  constructor(private af: AngularFire) {
    // this.items = af.database.list('/items');

  }

  getBusinesses(category:string = 'all'){
    if(category != 'all'){
      this.businesses = this.af.database.list('/businesses', {
        query: {
          orderByChild: 'category',
          equalTo: category
        }
      }) as
        FirebaseListObservable<Business[]>
    } else {
      this.businesses = this.af.database.list('/businesses') as
        FirebaseListObservable<Business[]>
    }

    return this.businesses;
  }


  getCategories(){
    this.categories = this.af.database.list('/categories') as
      FirebaseListObservable<Category[]>
    return this.categories;
  }

  addBusiness(value){
    return this.businesses.push(value)
  }

  updateBusiness(key, value){
    return this.businesses.update(key, value)
  }

  deleteBusiness(key){
  return this.businesses.remove(key)
}



}
