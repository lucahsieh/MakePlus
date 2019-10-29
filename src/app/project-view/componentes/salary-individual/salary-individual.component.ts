import { Component, OnInit,Input } from '@angular/core';
import { EmployeeSalary } from 'src/app/classes/employeeSalary';

@Component({
  selector: 'app-salary-individual',
  templateUrl: './salary-individual.component.html',
  styleUrls: ['./salary-individual.component.css']
})
export class SalaryIndividualComponent implements OnInit {

  @Input() employeeSalary:EmployeeSalary;
  @Input() readMode:boolean;
  constructor() { }

  ngOnInit() {
  }

}
