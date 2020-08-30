import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { EmpCrudService } from '../services/emp-crud.service'


@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.scss']
})
export class EmpInfoComponent implements OnInit {

  data;
  public display:boolean = false;
  constructor(public crudService: EmpCrudService) { }

  // Reactive Form

  updateForm = new FormGroup({
    empFirstName: new FormControl('', [Validators.required]),
    empLastName: new FormControl('', [Validators.required]),
    empAddress: new FormControl('', [Validators.required, Validators.minLength(5)]),
    empDOB: new FormControl('', [Validators.required])
  })

  
  get empFirstName() {return this.updateForm.get('empFirstName')}; //This allows to 'get' the values from the forms for validation checking
  
  get empLastName() {return this.updateForm.get('empLastName')};
  
  get empAddress() {return this.updateForm.get('empAddress')};

  get empDOB() {return this.updateForm.get('empDOB')};

  // Getter Methods for input values from reactive form
  get empFirstNameValue() {return this.updateForm.get('empFirstName').value};

  get empLastNameValue() {return this.updateForm.get('empLastName').value};
  
  get empAddressValue() {return this.updateForm.get('empAddress').value}

  get empDOBValue() {return this.updateForm.get('empDOB').value}

  // Updating form data
  onSubmit(id,empFirstName,empLastName,empAddress,empDOB){
    this.crudService.update_Emp(id,empFirstName,empLastName,empAddress,empDOB);
    console.log(`${this.updateForm.value.empFirstName}`) // this.data.id gets the id because of the function below that adds the id to the data variable
  }

  // Toggle methof for update form (display/not)
  toggle(){
    this.display = !this.display; //when this function is called, it will reverse the value
  }

  // Delete
  delete(id){
    this.crudService.delete_Emp(id)
  }

  ngOnInit(): void {
    this.crudService.get_Emp().subscribe(data =>{
      this.data = data.map(rawData => {
        return {
          id: rawData.payload.doc.id,
          empFirstName: rawData.payload.doc.data()['empFirstName'],
          empLastName: rawData.payload.doc.data()['empLastName'],
          empAddress: rawData.payload.doc.data()['empAddress'],
          empDOB: rawData.payload.doc.data()['empDOB'],
        }
      })
    });
  }

}