import { Component, OnInit, Input, Output } from '@angular/core';
import { PhaseItem } from 'src/app/classes/phaseItem';
import { PhaseColors } from 'src/app/classes/phaseColors';
import { Column } from 'primeng/components/common/shared';
import { Project } from 'src/app/classes/project';

@Component({
  selector: 'app-phase-tracking',
  templateUrl: './phase-tracking.component.html',
  styleUrls: ['./phase-tracking.component.css']
})
export class PhaseTrackingComponent implements OnInit {
  
  @Input() porject:Project;
  @Input() phases:PhaseItem[];
  @Input() readMode:boolean;
  totalPhasePredicted:number;
  totalActualPredicted:number;

  constructor() { }

  ngOnInit() {
    this.totalPhasePredicted = 0;
    this.totalActualPredicted = 0;
    this.calcuateTotal();
    console.log(this.phases);
  }

  setPhaseBackgroundColor(i){
    let styles = {
      'background-color': PhaseColors.colors[i],
      'color': 'white',
    };
    return styles;
  }

  calcuateTotal(){
    this.totalPhasePredicted = 0;
    this.totalActualPredicted = 0;
    for(var i = 0; i < this.phases.length; i++){
      console.log(this.totalPhasePredicted);
      this.totalPhasePredicted += parseFloat(this.phases[i].predictedDurationInWeeks.toString());
      this.totalActualPredicted += parseFloat(this.phases[i].actualDurationInWeeks.toString());
    }
  }


  onEditComplete(event: {column: Column, data: any}): void {
    this.calcuateTotal();
  }


  onTextEnterdInField(event: {originalEvent: any, column: Column, data: any}): void {
    this.calcuateTotal();
  }

}
