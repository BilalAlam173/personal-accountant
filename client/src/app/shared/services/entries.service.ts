import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  constructor(private dataService : DataService) { }

  create(payload){
    return this.dataService.createEntry(payload);
  }
  update(payload){
    return this.dataService.updateEntry(payload);
  }
  delete(payload){
    return this.dataService.deleteEntry(payload);
  }
  getAll(){
    return this.dataService.getAllEntry();
  }
}
