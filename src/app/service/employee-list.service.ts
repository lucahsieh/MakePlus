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
      new Employee(1, "Peter Ahn",100),
      new Employee(2, "Reneil Pascua",100),
      new Employee(3, "Perry Li",100),
      new Employee(4, "Luca Hsieh",100),
      new Employee(5, "Susanna Vinson",100),
      new Employee(6, "Mali French",100),
      new Employee(7, "Mayur Watt",100),
      new Employee(8, "Shauna Pemberton",100),
      new Employee(9, "Korban Bloggs",100),
      new Employee(10, "Zacharias Cotton",100),
      new Employee(11, "Bobbie Chung",100),
      new Employee(12, "Cally Wooten",100),
      new Employee(13, "Trent Blanchard",100),
    ];

  }


}
