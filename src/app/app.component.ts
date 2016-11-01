import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "./services/firebase.service";
import {Business} from "./shared/business";
import {Category} from "./shared/category";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private firebaseService: FirebaseService){}

  businesses: Business[];
  categories: Category[];
  appState: string;
  activeKey: string;
  created_at = new Date().toString();

  activeCompany:string;
  activeCategory:string;
  activeYearsInBusiness:string;
  activeDescription:string;
  activePhone:string;
  activeEmail:string;
  activeStreetAddress:string;
  activeCity:string;
  activeState:string;
  activeZipcode:string;

ngOnInit(){
  this.firebaseService.getBusinesses()
    .subscribe(results => this.businesses = results)

  this.firebaseService.getCategories()
    .subscribe(results => this.categories = results)

}

changeState(state, key){
  // this function changes the state of the "More" detail,
  // if there is a key value it will change the state to " state"
  // if there is no value it will change to default
  // in the ngIf  it is mentioned appstate == extend
  console.log('Changing state to: ' + state)
  if(key){
    console.log('Changing key to: ' + key)
    this.activeKey = key;
    this.appState = state;
  }this.appState = state

}

  filterCategory(category){
    this.firebaseService.getBusinesses(category)
      .subscribe(results => this.businesses = results)

  }


  addBusiness(form){
    // console.log(form.value)
    this.firebaseService.addBusiness(form.value)
    this.appState = 'default'

  }

  showEdit(business){
    this.changeState('edit', business.$key);
    this.activeCompany =          business.company;
    this.activeCategory =         business.category;
    this.activeYearsInBusiness =  business.years_in_business;
    this.activeDescription =      business.description;
    this.activePhone =            business.phone;
    this.activeEmail =            business.email;
    this.activeStreetAddress =    business.street_address;
    this.activeCity =             business.city;
    this.activeState =            business.state;
    this.activeZipcode =          business.zipcode;
  }

  updateBusiness(f){
    var updBusiness = {
      company:f.value.activeCompany,
      category:f.value.activeCategory,
      years_in_business:f.value.activeYearsInBusiness,
      description:f.value.activeDescription,
      phone:f.value.activePhone,
      email:f.value.activeEmail,
      street_address: f.value.activeStreetAddress,
      city: f.value.activeCity,
      state: f.value.activeState,
      zipcode: f.value.activeZipcode
    }
    this.firebaseService.updateBusiness(this.activeKey, updBusiness)
    this.appState = 'default'

  }

  deleteBusiness(key){
    this.firebaseService.deleteBusiness(key)
    this.appState = 'default'
  }


}
