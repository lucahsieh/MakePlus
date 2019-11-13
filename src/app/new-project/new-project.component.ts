import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../service/project.service';
import { Project } from '../classes/project';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
 
  eventsSubject: Subject<void> = new Subject<void>();

  project: Project;
  options: FormGroup;
  isDataLoaded:boolean;

  totalPhasePredicted = 0;
  totalActualPredicted = 0;
  spendtToDate = 0;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.project = new Project(null);
    this.isDataLoaded = false;
    this.projectService.getEmptyProject().subscribe(
      p => {
        this.project = p;
        this.projectService.getNextProjectID()
        .subscribe(p => {
          this.project.ID = p;
          console.log("Post new project.");
          console.log(this.project);
          this.isDataLoaded=true;
        });
      }
    );

  }

  submit() {
    this.projectService.postProject(this.project);
  }
  getPhaseChangedEvent(){
    this.eventsSubject.next()
  }
}
