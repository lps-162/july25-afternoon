import { Component, OnInit } from '@angular/core';

interface Employee {
  first_name: string;
  last_name: string;
  city: string;
}

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  listOfEmployees: Employee[] = [{
    first_name: 'Alexandra',
    last_name: 'Daddario',
    city: 'Los Angeles'
  },
  {
    first_name: 'Rock Dwayne',
    last_name: 'Johnson',
    city: 'Los Angeles'
  },
  {
    first_name: 'Deepika',
    last_name: 'Padukone',
    city: 'Newyork'
  }];

  dummyEmployee: Employee = {
    first_name: 'dummy',
    last_name: 'dummy',
    city: 'junk-city'
  };
  activeEmployee: Employee;

  myLiveProject = {
    name: 'Super apps with ANgular and Node.js'
  };

  constructor() { }

  ngOnInit() {
    
  }

  setActiveEmployee(employee) {
    this.activeEmployee = employee;
  }

}
