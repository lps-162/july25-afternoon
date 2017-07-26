import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() employee;
  @Input() project;

  constructor() { }

  ngOnInit() {
  }

}