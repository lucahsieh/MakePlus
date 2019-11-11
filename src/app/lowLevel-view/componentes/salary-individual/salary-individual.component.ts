import { Component, OnInit,Input } from '@angular/core';
import { EmployeeSalary } from 'src/app/classes/employeeSalary';
import { PhaseColors } from 'src/app/classes/phaseColors';
import { Column } from 'primeng/components/common/shared';
import { Project } from 'src/app/classes/project';

@Component({
  selector: 'app-salary-individual',
  templateUrl: './salary-individual.component.html',
  styleUrls: ['./salary-individual.component.css']
})
export class SalaryIndividualComponent implements OnInit {

  @Input() employeeSalary:EmployeeSalary;
  @Input() readMode:boolean;
  @Input() project:Project;

  constructor() { }

  ngOnInit() {
    this.calcuateTotal();
  }

  setPhaseBackgroundColor(i){
    let styles = {
      'background-color': PhaseColors.colors[i],
      'color': 'white',
    };
    return styles;
  }

  calcuateTotal(){
    this.employeeSalary.totalActual = 0;
    this.employeeSalary.totalBudget = 0;
    for(var i = 0; i < this.employeeSalary.phaseDetailsList.length; i++){
      this.employeeSalary.totalBudget += parseFloat(this.employeeSalary.phaseDetailsList[i].budgetHr.toString());
      this.employeeSalary.totalActual += parseFloat(this.employeeSalary.phaseDetailsList[i].actualHr.toString());
    }
    this.updateProjectOverview();
  }


  onEditComplete(event: {column: Column, data: any}): void {
    this.calcuateTotal();
  }


  onTextEnterdInField(event: {originalEvent: any, column: Column, data: any}): void {
    this.calcuateTotal();
  }

  updateProjectOverview(){
    let projectTotalSalaryBuget = 0;
    let projectTotalSalaryActual = 0;
    for(var i = 0; i < this.project.employeeSalaryList.length; i++){
      projectTotalSalaryBuget += parseFloat(this.project.employeeSalaryList[i].totalBudget.toString()) * parseFloat(this.project.employeeSalaryList[i].wage.toString());
      projectTotalSalaryActual += parseFloat(this.project.employeeSalaryList[i].totalActual.toString()) * parseFloat(this.project.employeeSalaryList[i].wage.toString());
    }
    this.project.salaryBudget = projectTotalSalaryBuget;
    this.project.spendToDate = parseFloat(this.getTotalActualMaterial().toString()) + projectTotalSalaryActual;
    console.log("project spendToDate=" + this.project.spendToDate);
  }


  getTotalActualMaterial(){
      let totalMaterialActual = 0;
      for(var i = 0; i < this.project.material.length; i++){
        totalMaterialActual += parseFloat(this.project.material[i].actualBudget.toString());
      }
      return totalMaterialActual;
    
  }

}
