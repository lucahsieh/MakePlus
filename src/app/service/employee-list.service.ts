import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Employee } from '../classes/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getAllEmployees(): Observable<Employee[]> {
    //   const url = `${this.projectUrl}/${id}`;
    //   return this.http.get<Project>(url).pipe(
    //       tap(_ => this.log(`fetched project id=${id}`)),
    //       catchError(this.handleError<Project>(`getProject id=${id}`))
    //   );
    return of(this.createDummyEmployees());
  };

  private createDummyEmployees() {
    return [
      new Employee(1, "Peter"),
      new Employee(2, "Reneil"),
      new Employee(3, "Perry"),
      new Employee(4, "Luca"),
      new Employee(5, "xx5"),
      new Employee(6, "xx6"),
      new Employee(7, "xx7"),
      new Employee(8, "xx8"),
      new Employee(9, "xx9"),
      new Employee(10, "xx10"),
      new Employee(11, "xx11"),
      new Employee(12, "xx12"),
      new Employee(13, "xx13"),
    ];

  }


}
