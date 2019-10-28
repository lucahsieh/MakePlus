import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

import { Project } from '../classes/project';
import { Employee } from '../classes/employee';
import { PhaseItem } from '../classes/phaseItem';
import { WorkloadItem } from '../classes/workloadItem';
import { SalaryItem } from '../classes/salaryItem';
import { MaterialItem } from '../classes/materialItem';
import { InvoiceItem } from '../classes/invoiceItem';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    private projectUrl = 'api/project';  // URL to web api

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }

      getProject(id: number): Observable<Project> {
        //   const url = `${this.projectUrl}/${id}`;
        //   return this.http.get<Project>(url).pipe(
        //       tap(_ => this.log(`fetched project id=${id}`)),
        //       catchError(this.handleError<Project>(`getProject id=${id}`))
        //   );
        return of(this.createDummyProject(id));
      };



    // getProject(id: number) {
    //     return this.createDummyProject(id);
    // }




    /** GET hero by id. Return `undefined` when id not found */
    getHeroNo404<Data>(id: number): Observable<Project> {
        const url = `${this.projectUrl}/?id=${id}`;
        return this.http.get<Project[]>(url)
            .pipe(
                map(Project => Project[0]), // returns a {0|1} element array
                tap(h => {
                    const outcome = h ? `fetched` : `did not find`;
                    this.log(`${outcome} Project id=${id}`);
                }),
                catchError(this.handleError<Project>(`getProject id=${id}`))
            );
    }


    /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }

    //   /** GET heroes from the server */
    //   getHeroes (): Observable<Hero[]> {
    //     return this.http.get<Hero[]>(this.heroesUrl)
    //       .pipe(
    //         tap(_ => this.log('fetched heroes')),
    //         catchError(this.handleError<Hero[]>('getHeroes', []))
    //       );
    //   }

    //   /** GET hero by id. Return `undefined` when id not found */
    //   getHeroNo404<Data>(id: number): Observable<Hero> {
    //     const url = `${this.heroesUrl}/?id=${id}`;
    //     return this.http.get<Hero[]>(url)
    //       .pipe(
    //         map(heroes => heroes[0]), // returns a {0|1} element array
    //         tap(h => {
    //           const outcome = h ? `fetched` : `did not find`;
    //           this.log(`${outcome} hero id=${id}`);
    //         }),
    //         catchError(this.handleError<Hero>(`getHero id=${id}`))
    //       );
    //   }

    //   /** GET hero by id. Will 404 if id not found */
    //   getHero(id: number): Observable<Hero> {
    //     const url = `${this.heroesUrl}/${id}`;
    //     return this.http.get<Hero>(url).pipe(
    //       tap(_ => this.log(`fetched hero id=${id}`)),
    //       catchError(this.handleError<Hero>(`getHero id=${id}`))
    //     );
    //   }

    //   /* GET heroes whose name contains search term */
    //   searchHeroes(term: string): Observable<Hero[]> {
    //     if (!term.trim()) {
    //       // if not search term, return empty hero array.
    //       return of([]);
    //     }
    //     return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    //       tap(_ => this.log(`found heroes matching "${term}"`)),
    //       catchError(this.handleError<Hero[]>('searchHeroes', []))
    //     );
    //   }

    //   //////// Save methods //////////

    //   /** POST: add a new hero to the server */
    //   addHero (hero: Hero): Observable<Hero> {
    //     return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
    //       tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
    //       catchError(this.handleError<Hero>('addHero'))
    //     );
    //   }

    //   /** DELETE: delete the hero from the server */
    //   deleteHero (hero: Hero | number): Observable<Hero> {
    //     const id = typeof hero === 'number' ? hero : hero.id;
    //     const url = `${this.heroesUrl}/${id}`;

    //     return this.http.delete<Hero>(url, this.httpOptions).pipe(
    //       tap(_ => this.log(`deleted hero id=${id}`)),
    //       catchError(this.handleError<Hero>('deleteHero'))
    //     );
    //   }

    //   /** PUT: update the hero on the server */
    //   updateHero (hero: Hero): Observable<any> {
    //     return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
    //       tap(_ => this.log(`updated hero id=${hero.id}`)),
    //       catchError(this.handleError<any>('updateHero'))
    //     );
    //   }

    //   /**
    //    * Handle Http operation that failed.
    //    * Let the app continue.
    //    * @param operation - name of the operation that failed
    //    * @param result - optional value to return as the observable result
    //    */
    //   private handleError<T> (operation = 'operation', result?: T) {
    //     return (error: any): Observable<T> => {

    //       // TODO: send the error to remote logging infrastructure
    //       console.error(error); // log to console instead

    //       // TODO: better job of transforming error for user consumption
    //       this.log(`${operation} failed: ${error.message}`);

    //       // Let the app keep running by returning an empty result.
    //       return of(result as T);
    //     };
    //   }

    //   /** Log a HeroService message with the MessageService */
    //   private log(message: string) {
    //     this.messageService.add(`HeroService: ${message}`);
    //   }


    private createDummyProject(id: number) {
        var p = new Project();
        p.ID = id;
        p.Name = "ISSP Project";
        p.desc = `Web Application for project management. The clients will be able to view/edit ongoing and past projects in both high level and low level details such as but not limited to final budget of the project, completion timeline, and individual project members’ invested hours respectively.`;
        p.salaryBudget = Math.floor(Math.random() * 10000) + 1;
        p.totalInvoice = Math.floor(Math.random() * 10000) + 1;
        p.materialBudget = Math.floor(Math.random() * 10000) + 1;
        p.spendToDate = Math.floor(Math.random() * 10000) + 1;
        p.startDate = new Date(2019, 11, 26);
        p.endDate = new Date(2019, 11, 31);
        p.completion = Math.floor(Math.random() * 100) + 1;
        p.businessCode="NA";
        p.costMultiplier=1.75;
        p.isProposal=false;
        p.isUnderISO13485=false;

        p.recoredStoredCompleted = Math.floor(Math.random() * 100) + 1;
        p.progressSurveyRsult = true;
        p.progressSurveySent = true;
        p.followupSurveySent = true;
        p.followupSurveyResult = false;

        p.lead = [
            new Employee(1, "Peter"),
        ];
        p.member = [
            new Employee(2, "Reneil"),
            new Employee(3, "Perry"),
        ];

        p.phaseArr = [
            new PhaseItem(1, "consulting", new Date(2019, 10, 16), new Date(2019, 10, 30)),
            new PhaseItem(2, "Requirements", new Date(2019, 10, 31), new Date(2019, 11, 5)),
            new PhaseItem(3, "Concept", new Date(2019, 11, 6), new Date(2019, 11, 21)),
            new PhaseItem(4, "Detailed Design", new Date(2019, 11, 22), new Date(2019, 12, 10)),
            new PhaseItem(5, "Fabrication", new Date(2019, 12, 10), new Date(2019, 12, 20)),
            new PhaseItem(6, "Evaluation/ user study", new Date(2019, 12, 21), new Date(2019, 12, 31)),
            new PhaseItem(7, "Reporting", new Date(2020, 1, 1), new Date(2020, 1, 10)),
            new PhaseItem(8, "Validation", new Date(2020, 1, 11), new Date(2020, 1, 15)),
        ];

        p.workloadArr = [
            new WorkloadItem(1, "Peter", 0, 0, 23, 31, 5, 6),
            new WorkloadItem(2, "Reneil", 12, 3, 0, 0, 0, 0)        ];

        p.salaryArr = [
            new SalaryItem(1, 1, "Peter", 35),
            new SalaryItem(2, 1, "Peter", 35),
            new SalaryItem(3, 1, "Peter", 35),
            new SalaryItem(4, 1, "Peter", 35),
            new SalaryItem(1, 2, "Reneil", 40),
            new SalaryItem(2, 2, "Reneil", 40),
            new SalaryItem(3, 2, "Reneil", 40),
            new SalaryItem(4, 2, "Reneil", 40),
            new SalaryItem(1, 3, "Perry", 55),
            new SalaryItem(2, 3, "Perry", 55),
            new SalaryItem(3, 3, "Perry", 55),
            new SalaryItem(4, 3, "Perry", 55),
        ];
        p.invoiceArr = [
            new InvoiceItem(Math.floor(Math.random() * 1000) + 101, new Date(2019, 11, 2)),
            new InvoiceItem(Math.floor(Math.random() * 1000) + 101, new Date(2019, 11, 12)),
            new InvoiceItem(Math.floor(Math.random() * 1000) + 101, new Date(2019, 11, 22)),
        ];

        p.material = [
            new MaterialItem(1),
            new MaterialItem(2),
            new MaterialItem(3),
            new MaterialItem(4),
        ];
        return p;
    };
}