import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../classes/project';
import { ProjectService } from '../service/project.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ProjectEditComponent } from './project-edit/project-edit.component';


@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})


export class ProjectViewComponent implements OnInit {

  // @Input() 
  project: Project;
  

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.getProject();
    
    console.log(JSON.stringify(this.project));
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // this.project = this.projectService.getProject(id);
    this.projectService.getProject(id)
      .subscribe(project => this.project = project);
    
  }






}
