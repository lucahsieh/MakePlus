import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectViewComponent } from './lowLevel-view/project-view.component';
import { HighlevelViewComponent } from './highlevel-view/highlevel-view.component';
import { WorkloadViewComponent } from './midLevel-view/workload-view.component';
import { ProjectEditComponent } from './lowLevel-view/project-edit/project-edit.component';



const routes: Routes = [
  {path: '',component: HighlevelViewComponent},
  {path: 'workloadSummery',component: WorkloadViewComponent},
  {path: 'project/:id',component: ProjectViewComponent},
  {path: 'project/edit/:id', component: ProjectEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
