import { SettingsService } from './../shared/services/settings.service';
import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EntriesService } from '../shared/services/entries.service';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  modalRef: BsModalRef;
  entrys;
  AddEntryForm;
  singleEntry;
  accounts;
  methods;
  categories;

  constructor(private settingService: SettingsService,private entryService:EntriesService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getAll();
    this.AddEntryForm = new FormGroup({
      title: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      AccountId: new FormControl('', Validators.required),
      CategoryId: new FormControl('', Validators.required),
      MethodId: new FormControl('', Validators.required),
    });
    this.settingService.getAllMethod().subscribe((res)=>{
      this.methods=res;
    });
    this.settingService.getAllAccount().subscribe((res)=>{
      this.accounts=res;
    });
  }

  loadCategories(id){
    this.settingService.getCategoryByAccount({id}).subscribe((res)=>{
      this.categories=res;
    });
  }

  getAll(){
    this.entryService.getAll().subscribe((res) => {
     console.log(res)
      this.entrys = res;
    },(error) => {
      console.log(error)
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }

  deleteEntry(id){
    console.log(id)
     let payload = {
      id: id
    }
    this.entryService.delete(payload).subscribe((res) => {
      console.log(res);
      this.getAll()
     },(error) => {
       console.log(error)
     });

  }

  addEntry(data){
    let payload = {
      title: data.title,
      amount: data.amount,
      AccountId:data.AccountId,
      CategoryId:data.CategoryId,
      MethodId:data.MethodId
    }
    console.log(payload);

    this.entryService.create(payload).subscribe((res) => {
      this.entrys.push(res);
      this.singleEntry = res;
     },(error) => {
       console.log(error)
     });

  }
}
