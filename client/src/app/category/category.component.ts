import { SettingsService } from './../shared/services/settings.service';
import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  modalRef: BsModalRef;
  Categories;
  AddCategoryForm;
  singleCategory;
  accounts;

  constructor(private settingService: SettingsService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getAll();
    this.AddCategoryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      AccountId: new FormControl('', Validators.required),
    });
  }

  getAll(){
    this.settingService.getAllCategory().subscribe((res) => {
     console.log(res)
      this.Categories = res;
    },(error) => {
      console.log(error)
    });

    this.settingService.getAllAccount().subscribe((res)=>{
      this.accounts=res;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteCategory(i){

     let payload = {
      id: this.Categories[i].id
    }
    this.settingService.deleteCategory(payload).subscribe((res) => {
      this.Categories.splice(i,1);
     },(error) => {
       console.log(error)
     });

  }

  addCategory(data){
    let payload = {
      name: data.name,
      AccountId: data.AccountId
    }
    console.log(payload);

    this.settingService.createCategory(payload).subscribe((res) => {
      this.Categories.push(res);
      this.singleCategory = res;
     },(error) => {
       console.log(error)
     });

  }
}
