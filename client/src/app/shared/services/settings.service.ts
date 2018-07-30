import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  constructor(private dataService : DataService) { }

  //category

  createCategory(payload){
    return this.dataService.createCategory(payload);
  }
  updateCategory(payload){
    return this.dataService.updateCategory(payload);
  }
  deleteCategory(payload){
    return this.dataService.deleteCategory(payload);
  }
  getAllCategory(){
    return this.dataService.getAllCategory();
  }

  //method

  createMethod(payload){
    return this.dataService.createMethod(payload);
  }
  updateMethod(payload){
    return this.dataService.updateMethod(payload);
  }
  deleteMethod(payload){
    return this.dataService.deleteMethod(payload);
  }
  getAllMethod(){
    return this.dataService.getAllMethod();
  }

  //account

  createAccount(payload){
    return this.dataService.createAccount(payload);
  }
  updateAccount(payload){
    return this.dataService.updateAccount(payload);
  }
  deleteAccount(payload){
    return this.dataService.deleteAccount(payload);
  }
  getAllAccount(){
    return this.dataService.getAllAccount();
  }
  
}
