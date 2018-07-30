import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = "/api/";

  constructor(private http: HttpClient) { }

  // authentication
  loginUser(payload) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + 'login', payload);
  }
  registerUser(payload) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + 'user', payload);
  }

  //accounts

  createAccount(payload) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + 'account', payload);
  }

  deleteAccount(payload){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(`${this.baseUrl}account/${payload.id}`);
  }

  updateAccount(payload){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.baseUrl + 'account', payload);
  }

  getAllAccount(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.baseUrl + 'account');
  }

  //categories

  createCategory(payload) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + 'category', payload);
  }

  deleteCategory(payload){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(`${this.baseUrl}category/${payload.id}`);
  }

  updateCategory(payload){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.baseUrl + 'category', payload);
  }

  getAllCategory(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.baseUrl + 'category');
  }
  getCategoryByAccount(payload){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.baseUrl}category/${payload.id}`);
  }

  //methods

  createMethod(payload) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + 'method', payload);
  }

  deleteMethod(payload){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(`${this.baseUrl}method/${payload.id}`);
  }

  updateMethod(payload){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.baseUrl + 'method', payload);
  }

  getAllMethod(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.baseUrl + 'method');
  }

  //entry

  createEntry(payload) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + 'entry', payload);
  }

  deleteEntry(payload){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.baseUrl + 'entry', payload);
  }

  updateEntry(payload){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.baseUrl + 'entry', payload);
  }

  getAllEntry(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.baseUrl + 'entry');
  }
}
