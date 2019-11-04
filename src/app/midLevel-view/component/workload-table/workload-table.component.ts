import { Component, OnInit } from '@angular/core';
import { WorkloadPageItem } from 'src/app/classes/workLoadPageItem';
import { ActivatedRoute } from '@angular/router';
import { WorkloadPageService } from 'src/app/service/workload-page.service';
import { EmployeeListService } from 'src/app/service/employee-list.service';
import { EmployeeSalary } from 'src/app/classes/employeeSalary';
import { Employee } from 'src/app/classes/employee';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-workload-table',
  templateUrl: './workload-table.component.html',
  styleUrls: ['./workload-table.component.css']
})
export class WorkloadTableComponent implements OnInit {

  workloadPageItems: WorkloadPageItem[];
  cols: any[];
  employees:Employee[];
  employeesSelectItems:SelectItem[];
  months:Date[];

  constructor(
    private route: ActivatedRoute,
    private workloadPageService: WorkloadPageService,
    private allEmployees: EmployeeListService
  ) { }

  ngOnInit() {
    this.workloadPageItems=[];
    this.employees=[];
    this.employeesSelectItems=[];
    this.months=[];
    this.cols = [
      { field: 'projectName', header: 'Project Name' },
      { field: 'empName', header: 'Research Member' },
      { field: 'month1', header: 'month1' },
      { field: 'month2', header: 'month2' },
      { field: 'month3', header: 'month3' },
      { field: 'month4', header: 'month4' },
      { field: 'month5', header: 'month5' },
      { field: 'month6', header: 'month6' },
      { field: 'projectCompletion', header: 'Project Completion' },
      { field: 'projectEndDate', header: 'Projected End Date' }
    ];
    this.getWorkload();
    console.log("Get all workload items for mid-level\n"+JSON.stringify(this.workloadPageItems));
    this.getEmployees();
    this.paraEmployeeListToSelectItem();
    this.initMonths();

  }

  getWorkload(): void {
    this.workloadPageService.getAllWorkloadItems()
      .subscribe(w => this.workloadPageItems = w);
  }

  getEmployees(): void {
    this.allEmployees.getAllEmployees()
      .subscribe(e => this.employees = e);
  }

  paraEmployeeListToSelectItem(){
    for (var i = 0; i < this.employees.length; i++) {
      this.employeesSelectItems.push({ label: this.employees[i].name, value: this.employees[i].name });
    }
  }
  private initMonths(){
    let currentM = new Date().getMonth();
    let currentY = new Date().getFullYear();
    this.months = [
      new Date(currentY,currentM),
      new Date(currentY,currentM+1),
      new Date(currentY,currentM+2),
      new Date(currentY,currentM+3),
      new Date(currentY,currentM+4),
      new Date(currentY,currentM+5)
    ]
  }

}
