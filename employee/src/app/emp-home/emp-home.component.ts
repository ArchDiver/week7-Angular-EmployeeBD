
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmpCrudService } from '../services/emp-crud.service';

@Component({
  selector: 'app-emp-home',
  templateUrl: './emp-home.component.html',
  styleUrls: ['./emp-home.component.scss']
})
export class EmpHomeComponent implements OnInit {
  // data;
  empForm = new FormGroup({
    empFirstName: new FormControl('', [Validators.required]),
    empLastName: new FormControl('', [Validators.required]),
    empAddress: new FormControl('', [Validators.required, Validators.minLength(15)]),
    empDOB: new FormControl('', [Validators.required])
  })

  
  get empFirstName() {return this.empForm.get('empFirstName')}; //This allows to 'get' the values from the forms for validation checking
  
  get empLastName() {return this.empForm.get('empLastName')};

  get empAddress() {return this.empForm.get('empAddress')};
  
  get empDOB() {return this.empForm.get('empDOB')};
  
  // Form handler for Todo Reactive Form
  onSubmit(){
    this.crudService.create_Emp(this.empForm.value.empFirstName, this.empForm.value.empLastName, this.empForm.value.empAddress, this.empForm.value.empDOB);
    console.log(`${this.empForm.value.empFirstName}`) // will give us the first piece of data from the Todo Form
  }

  constructor(public crudService: EmpCrudService) { }

  ngOnInit(): void {
  }

}