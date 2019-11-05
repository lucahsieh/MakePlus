import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../classes/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../service/project.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  project: Project;
  options: FormGroup;
  isDataLoaded:boolean;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.getProject();
    this.isDataLoaded = false;
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // this.project = this.projectService.getProject(id);
    this.projectService.getProject(id)
      .subscribe(project => {
        this.project = new Project(project);
        console.log("current this in callback");
        console.log(this.project);
        this.isDataLoaded = true;
      });
  }
}