import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { MessageService } from './message.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProjectListItem } from '../classes/projectListItem';
import { ProposalListItem } from '../classes/proposalListItem';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllProjects(): Observable<ProjectListItem[]> {
    //   const url = `${this.projectUrl}/${id}`;
    //   return this.http.get<Project>(url).pipe(
    //       tap(_ => this.log(`fetched project id=${id}`)),
    //       catchError(this.handleError<Project>(`getProject id=${id}`))
    //   );
    return of(this.createDummyProjectsData());
  };

  createDummyProjectsData():ProjectListItem[]{
    let projectListItemArr = [
      new ProjectListItem(0,"ISSP","Peter Ahn",new Date(),new Date(),80,10000,8000,75,true,"K73.1/8731",true,false,false,false),
      new ProjectListItem(1,"Baby Calmer","Gord",new Date(),new Date(),75,20000,15000,50,false,"NA",true,true,false,false),
      new ProjectListItem(2,"JB Exercise machine","Johanne",new Date(),new Date(),75,20000,15000,50,false,"DL33.10/3842",true,true,false,false),
      new ProjectListItem(3,"project name 1","team lead",new Date(),new Date(),0,20000,13000,0,false,"NA",false,false,false,false),
      new ProjectListItem(4,"project name 2","team lead2",new Date(),new Date(),0,10000,9000,0,false,"NA",false,false,false,false),
  ];
  console.log("getAllProjects\n"+JSON.stringify(projectListItemArr));
  return projectListItemArr;
  }

  getAllProposals(): Observable<ProposalListItem[]> {
    //   const url = `${this.projectUrl}/${id}`;
    //   return this.http.get<Project>(url).pipe(
    //       tap(_ => this.log(`fetched project id=${id}`)),
    //       catchError(this.handleError<Project>(`getProject id=${id}`))
    //   );
    return of(this.createDummyProposalsData());
  };

  createDummyProposalsData():ProposalListItem[]{
    let projectListItemArr = [
      new ProposalListItem(0,"proposal name 1", "lead name 1", 10000),
      new ProposalListItem(1,"another proposal name 2", " another lead name 2", 21000),
      new ProposalListItem(2,"proposal name 3", "lead name 3", 9000)
  ];
  console.log("getAllProposals\n"+JSON.stringify(projectListItemArr));
  return projectListItemArr;
  }
}
