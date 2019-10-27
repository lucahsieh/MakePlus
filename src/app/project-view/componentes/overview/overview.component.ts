import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/classes/project';
import { SelectItem } from 'primeng/components/common/selectitem';
import { EmployeeListService } from 'src/app/service/employee-list.service';
import { Employee } from 'src/app/classes/employee';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {

  @Input() project:Project;
  @Input() readMode:boolean;
  source: Employee[];
  allEmployeeItems: SelectItem[];
  teamMemberSelected: string[] = [];
  teamLeadSelected: string[] = [];

  constructor(
    private employeeListService: EmployeeListService,
    ) { 
      this.allEmployeeItems=[];
    }

  ngOnInit() {
    this.getAllEmployees();
    this.initTeamMembersOptions();

  }

  private initTeamMembersOptions(): void {
    for (var i = 0; i < this.source.length; i++) {
        this.allEmployeeItems.push({ label: this.source[i].name, value: this.source[i].name });
    }
    for(var i=0;i<this.project.member.length;i++){
      this.teamMemberSelected.push(this.project.member[i].name);
    }
    for(var i=0;i<this.project.lead.length;i++){
      this.teamLeadSelected.push(this.project.lead[i].name);
    }
  }

  selectionChanged(){
    //TODO: save selected into this. members & leads.
  }

  getAllEmployees(): void {
    this.employeeListService.getAllEmployees()
      .subscribe(employees => this.source = employees);

  }

}
