import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { WorkloadPageItem } from '../classes/workLoadPageItem';

@Injectable({
  providedIn: 'root'
})
export class WorkloadPageService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllWorkloadItems(): Observable<WorkloadPageItem[]> {
    //   const url = `${this.projectUrl}/${id}`;
    //   return this.http.get<Project>(url).pipe(
    //       tap(_ => this.log(`fetched project id=${id}`)),
    //       catchError(this.handleError<Project>(`getProject id=${id}`))
    //   );
    return of(this.createDummyWorkloadPageData());
  };


  private createDummyWorkloadPageData():WorkloadPageItem[] {
    let workloadPageArr = [
        new WorkloadPageItem(0,"ISSP",1,"Reneil Pascua",70,35,14,0,0,0,80,new Date(),false),
        new WorkloadPageItem(0,"ISSP",2,"Perry Li",98,14,28,0,0,0,80,new Date(),false),
        new WorkloadPageItem(1,"Project2",1,"Reneil Pascua",70,35,14,0,0,0,75,new Date(),false),
        new WorkloadPageItem(1,"Project2",2,"Jaimie Borisoff",12,21,43,0,0,0,75,new Date(),false),
        new WorkloadPageItem(1,"Project2",3,"Lisa Boulton",43,21,42,0,0,0,75,new Date(),false),
        new WorkloadPageItem(1,"Project2",4,"Rory Dougall ",33,22,11,0,0,0,75,new Date(),false),
        new WorkloadPageItem(9990,"Vaction",2,"Perry Li",0,0,23,43,1,3,0.0,new Date(),true),
        new WorkloadPageItem(9990,"Vaction",1,"Reneil Pascua",0,0,6,32,23,50,0.0,new Date(),true),
        new WorkloadPageItem(9990,"Vaction",3,"Lisa Boulton",0,0,3,63,23,23,0.0,new Date(),true),
        new WorkloadPageItem(9991,"Student",2,"Perry Li",0,0,23,43,1,3,0.0,new Date(),true),
        new WorkloadPageItem(9991,"Student",1,"Reneil Pascua",0,0,6,32,23,50,0.0,new Date(),true),
        new WorkloadPageItem(9991,"Student",3,"Lisa Boulton",0,0,3,63,23,23,0.0,new Date(),true),
    ];
    return workloadPageArr;
  }
}
