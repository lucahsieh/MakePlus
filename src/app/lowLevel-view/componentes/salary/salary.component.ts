import { Component, OnInit,Input } from '@angular/core';
import { EmployeeSalary } from 'src/app/classes/employeeSalary';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  @Input() readMode:boolean;
  @Input() employeeSalaryArr:EmployeeSalary[];
  constructor() { }

  ngOnInit() {
  }

}
