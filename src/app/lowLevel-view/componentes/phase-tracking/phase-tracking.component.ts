import { Component, OnInit, Input } from '@angular/core';
import { PhaseItem } from 'src/app/classes/phaseItem';
import { PhaseColors } from 'src/app/classes/phaseColors';

@Component({
  selector: 'app-phase-tracking',
  templateUrl: './phase-tracking.component.html',
  styleUrls: ['./phase-tracking.component.css']
})
export class PhaseTrackingComponent implements OnInit {
  
  @Input() phases:PhaseItem[];
  @Input() readMode:boolean;

  constructor() { }

  ngOnInit() {
  }

  setPhaseBackgroundColor(i){
    let styles = {
      'background-color': PhaseColors.colors[i],
      'color': 'white',
    };
    return styles;
  }

}
