import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Employee } from '../../shared/models/employee';

@Component({
  selector: 'employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  @Output() employeeCreated = new EventEmitter();
  
  employee: Employee = new Employee();

  constructor() { }

  ngOnInit() {
  }

  createEmployee() {
    // console.log('Form submission is happening');
    // console.log(this.employee);

    this.employeeCreated.emit(
      { 
        employee: this.employee, 
        dummy: 'Shivan',
      }
    );

    this.employee = new Employee();
    
  }


}
