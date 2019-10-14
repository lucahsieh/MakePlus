import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../classes/project';
import { ProjectService } from '../service/project.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  @Input() project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.project=this.projectService.getProject(id);
    // this.projectService.getProject(id)
    //   .subscribe(project => this.project = project);
  }


}
