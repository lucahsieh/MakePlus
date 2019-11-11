import { Component, OnInit,Input } from '@angular/core';
import { EmployeeSalary } from 'src/app/classes/employeeSalary';
import { Project } from 'src/app/classes/project';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  @Input() readMode:boolean;
  @Input() employeeSalaryArr:EmployeeSalary[];
  @Input() project:Project;

  budgetArr:number

  constructor() { }

  ngOnInit() {
  }

}
