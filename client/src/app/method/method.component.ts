import { SettingsService } from './../shared/services/settings.service';
import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.css']
})
export class MethodComponent implements OnInit {
  modalRef: BsModalRef;
  methods;
  AddMethodForm;
  singleMethod;

  constructor(private settingService: SettingsService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getAll();
    this.AddMethodForm = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    });
  }

  getAll(){
    this.settingService.getAllMethod().subscribe((res) => {
     console.log(res)
      this.methods = res;
    },(error) => {
      console.log(error)
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteMethod(id){
    console.log(id)
     let payload = {
      id: id
    }
    this.settingService.deleteMethod(payload).subscribe((res) => {
      console.log(res);
      this.getAll()
     },(error) => {
       console.log(error)
     });

  }

  addMethod(data){
    let payload = {
      name: data.name,
      type: data.type
    }

    this.settingService.createMethod(payload).subscribe((res) => {
      this.methods.push(res);
      this.singleMethod = res;
     },(error) => {
       console.log(error)
     });

  }
}
