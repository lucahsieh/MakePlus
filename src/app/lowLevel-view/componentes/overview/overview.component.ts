import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/classes/project';
import { SelectItem } from 'primeng/components/common/selectitem';
import { EmployeeListService } from 'src/app/service/employee-list.service';
import { Employee } from 'src/app/classes/employee';
import { WorkloadItem } from 'src/app/classes/workloadItem';
import { EmployeeSalary } from 'src/app/classes/employeeSalary';
import { PhaseDetail } from 'src/app/classes/phaseDetail';
import { BusinessCodeService } from 'src/app/service/business-Code.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {

  @Input() project: Project;
  @Input() readMode: boolean;
  employees: Employee[];
  allEmployeeItems: SelectItem[];
  teamMemberSelected: string[] = [];
  teamLeadSelected: string[] = [];
  businessCodeOptions: string[];

  constructor(
    private employeeListService: EmployeeListService,
    private businessCodeService: BusinessCodeService,
  ) {
    this.allEmployeeItems = [];
  }

  ngOnInit() {
    this.getAllEmployees();
    this.getBusinessCodes();
  }



  private initTeamMembersOptions(): void {
    if (this.employees == null || this.project == null)
      return;
    for (var i = 0; i < this.employees.length; i++) {
      this.allEmployeeItems.push({ label: this.employees[i].name, value: this.employees[i].name });
    }
    for (var i = 0; i < this.project.member.length; i++) {
      this.teamMemberSelected.push(this.project.member[i].name);
    }
    for (var i = 0; i < this.project.lead.length; i++) {
      this.teamLeadSelected.push(this.project.lead[i].name);
    }
  }

  teamMemberSelectionChanged(e) {
    var id = this.findEmployeeByName(e).empID;
    let wage = this.findEmployeeByName(e).wage;
    var selected = this.isSelected(e);
    if (selected) {
      this.addToWorkloadTable(id, e);
      this.addToSalaryTable(id, e, wage);
    } else {
      this.removeFromWorkloadTable(e);
      this.removeFromSalaryTable(id);
    }
  }
  private isSelected(name: string) {
    for (var i = 0; i < this.teamMemberSelected.length; i++) {
      if (name == this.teamMemberSelected[i])
        return true;
    }
    return false;
  }
  private addToSalaryTable(id: number, name: string, wage: number) {
    let temp = new EmployeeSalary();
    temp.empID = id;
    temp.empName = name;
    temp.wage = wage;
    for (var j = 0; j < this.project.phaseArr.length; j++) {
      var phaseID = this.project.phaseArr[j].phaseID;
      var phaseName = this.project.phaseArr[j].name;
      temp.phaseDetailsList.push(new PhaseDetail(phaseID, phaseName, 0, 0, ""));
    }
    this.project.employeeSalaryList.push(temp);
  }
  private addToWorkloadTable(id: number, name: string) {
    let temp = new WorkloadItem(id, name, 0, 0, 0, 0, 0, 0);
    this.project.workloadArr.push(temp);
  }
  private removeFromWorkloadTable(name: string) {
    for (var i = 0; i < this.project.workloadArr.length; i++) {
      if (name == this.project.workloadArr[i].empName) {
        this.project.workloadArr.splice(i, 1);
      }
    }
  }
  private removeFromSalaryTable(id: number) {
    for (var i = 0; i < this.project.employeeSalaryList.length; i++) {
      if (id == this.project.employeeSalaryList[i].empID) {
        this.project.employeeSalaryList.splice(i, 1);
      }
    }
  }

  private findEmployeeByName(name: string) {
    for (var i = 0; i < this.employees.length; i++) {
      if (this.employees[i].name == name)
        return this.employees[i];
    }
  }

  getAllEmployees(): void {
    this.employeeListService.getAllEmployees()
      .subscribe(employees => {
        this.employees = employees;
        console.log("all employee api get response");
        console.log(JSON.stringify(this.employees));
        this.initTeamMembersOptions();
      });
  }
  getBusinessCodes(): void {
    this.businessCodeService.getBusinessCodes()
      .subscribe(res => {
        this.businessCodeOptions = res;
        console.log("business codes api get response");
        console.log(JSON.stringify(this.businessCodeOptions));
        this.initTeamMembersOptions();
      });
  }
}

export interface BusinessCode {
  value: string;
  viewValue: string;
}