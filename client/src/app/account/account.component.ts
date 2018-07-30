import { SettingsService } from './../shared/services/settings.service';
import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  modalRef: BsModalRef;
  accounts;
  AddAccountForm;
  singleAccount;

  constructor(private settingService: SettingsService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getAll();
    this.AddAccountForm = new FormGroup({
      name: new FormControl('', Validators.required),
      positive: new FormControl('', Validators.required),
    });
  }

  getAll(){
    this.settingService.getAllAccount().subscribe((res) => {
     console.log(res)
      this.accounts = res;
    },(error) => {
      console.log(error)
    }); 
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteAccount(id){
    console.log(id)
     let payload = {
      id: id
    }
    this.settingService.deleteAccount(payload).subscribe((res) => {
      console.log(res);
      this.getAll()
     },(error) => {
       console.log(error)
     }); 

  }

  addAccount(data){
    let payload = {
      name: data.name,
      isPositive: data.positive ==="1" ? 1:0
    }
    console.log(payload);

    this.settingService.createAccount(payload).subscribe((res) => {
      this.accounts.push(res);
      this.singleAccount = res;
     },(error) => {
       console.log(error)
     }); 
    
  }
}
