import { Component, OnInit,Input } from '@angular/core';
import { MaterialItem } from 'src/app/classes/materialItem';
import { PhaseColors } from 'src/app/classes/phaseColors';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  @Input() readMode: boolean;
  @Input() material: MaterialItem[];
  constructor() { }

  ngOnInit() {
  }

  setPhaseBackgroundColor(i){
    let styles = {
      'background-color': PhaseColors.colors[i],
      'color': 'white',
      'width': '10px'

    };
    return styles;
  }

}
