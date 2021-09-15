import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeServiceService } from './employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee-details';
  dataSource = [];
  // Employee Form for the user to enter data 
  employeeForm = new FormGroup({
    name: new FormControl('',Validators.pattern('[a-zA-Z\\s]+')),
    email: new FormControl('', Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$')),
    phoneNumber: new FormControl('',Validators.pattern('^[0-9]*$')),
    picker:new FormControl('',),
    dancing: new FormControl(),
    painting: new FormControl(),
    gender: new FormControl()
  });
  displayedColumns: string[] = ['name', 'email', 'phoneNumber']; // Columns displayed in the table.
  constructor(private employeeSevice: EmployeeServiceService){}
  ngOnInit() {
    this.fetchEmployeeData();
  }
  submitData(){
    var hobbies = [];
    if(this.employeeForm.value.dancing){
      hobbies.push('dancing');
    }
    if(this.employeeForm.value.painting){
      hobbies.push('painting')
    }
    const employeeData = {
      "name" : this.employeeForm.value.name,
      "email": this.employeeForm.value.email,
      "phoneNumber": this.employeeForm.value.phoneNumber,
      "dateOfBirth": this.employeeForm.value.picker,
      "gender": this.employeeForm.value.gender,
      "hobbies": hobbies
    }
    this.employeeSevice.postEmployeeDetails(employeeData).subscribe((data: any) => {
    });
  }
  fetchEmployeeData(){
    this.employeeSevice.getEmployeeDetails().subscribe((data: any) => {
      this.dataSource = data
    });
  }
}
