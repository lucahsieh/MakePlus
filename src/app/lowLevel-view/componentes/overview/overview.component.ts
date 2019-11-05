import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/classes/project';
import { SelectItem } from 'primeng/components/common/selectitem';
import { EmployeeListService } from 'src/app/service/employee-list.service';
import { Employee } from 'src/app/classes/employee';
import { WorkloadItem } from 'src/app/classes/workloadItem';
import { EmployeeSalary } from 'src/app/classes/employeeSalary';
import { PhaseDetail } from 'src/app/classes/phaseDetail';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {

  @Input() project: Project;
  @Input() readMode: boolean;
  source: Employee[];
  allEmployeeItems: SelectItem[];
  teamMemberSelected: string[] = [];
  teamLeadSelected: string[] = [];
  businessCodeOptions: string[];

  constructor(
    private employeeListService: EmployeeListService,
  ) {
    this.allEmployeeItems = [];
  }

  ngOnInit() {
    this.getAllEmployees();
    this.initTeamMembersOptions();
    this.populateBusinessCodes();

  }



  private initTeamMembersOptions(): void {
    for (var i = 0; i < this.source.length; i++) {
      this.allEmployeeItems.push({ label: this.source[i].name, value: this.source[i].name });
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
    if(selected){
      this.addToWorkloadTable(id,e);
      this.addToSalaryTable(id,e,wage);
    }else{
      this.removeFromWorkloadTable(e);
      this.removeFromSalaryTable(id);
    }
    //TODO: save selected into this. members & leads.
  }
  private isSelected(name:string){
    for(var i = 0; i < this.teamMemberSelected.length;i++){
      if (name == this.teamMemberSelected[i])
      return true;
    }
    return false;
  }
  private addToSalaryTable(id:number,name:string,wage:number){
    let temp = new EmployeeSalary();
    temp.empID=id;
    temp.empName=name;
    temp.wage=wage;
    for (var j = 0; j < this.project.phaseArr.length; j++) {
        var phaseID = this.project.phaseArr[j].phaseID;
        var phaseName = this.project.phaseArr[j].name;
        temp.phaseDetailsList.push(new PhaseDetail(phaseID,phaseName, 0, 0, ""));
    }
    this.project.employeeSalaryList.push(temp);
  }
  private addToWorkloadTable(id:number,name:string){
    let temp = new WorkloadItem(id,name,0,0,0,0,0,0);
    this.project.workloadArr.push(temp);
  }
  private removeFromWorkloadTable(name:string){
    for(var i =0;i<this.project.workloadArr.length;i++){
      if(name == this.project.workloadArr[i].empName){
        this.project.workloadArr.splice(i,1);
      }
    }
  }
  private removeFromSalaryTable(id:number){
    for(var i =0;i<this.project.employeeSalaryList.length;i++){
      if(id == this.project.employeeSalaryList[i].empID){
        this.project.employeeSalaryList.splice(i,1);
      }
    }
  }

  private findEmployeeByName(name:string){
    for(var i = 0; i< this.source.length;i++){
      if(this.source[i].name == name)
        return this.source[i];
    }
  }

  getAllEmployees(): void {
    this.employeeListService.getAllEmployees()
      .subscribe(employees => this.source = employees);

      console.log("list of empoyees");
    console.log(JSON.stringify(this.source));

  }

  setProject(project : Project){

  }

  populateBusinessCodes() {
    this.businessCodeOptions = [
      'NA',
      'K73.1/8731',
      'K74.14/8742',
      'DL33.10/3841',
      'DL33.10/3842',
      'DL33.10/3843',
      'DL3310/3845'
    ];

    // this.businessCodeOptions = [
    //   {value:'NA',viewValue:'NA'},
    //   {value:'K73.1/8731',viewValue:'K73.1/8731'},
    //   {value:'K74.14/8742',viewValue:'K74.14/8742'},
    //   {value:'DL33.10/3841',viewValue:'DL33.10/3841'},
    //   {value:'DL33.10/3842',viewValue:'DL33.10/3842'},
    //   {value:'DL33.10/3843',viewValue:'DL33.10/3843'},
    //   {value:'DL3310/3845',viewValue:'DL3310/3845'},
    // ]
  }

  

}

export interface BusinessCode {
  value: string;
  viewValue: string;
}