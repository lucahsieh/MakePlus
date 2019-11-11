
import{PhaseDetail} from './phaseDetail';

export class EmployeeSalary {
    empID: number;
    empName: string;
    wage:number;
    phaseDetailsList:PhaseDetail[];
    totalBudget:number;     // for front-end only
    totalActual:number;     // for front-end only

    constructor(
        
    ) {
        this.phaseDetailsList=[];
    }
    // constructor(
    //     empID: number,
    //     empName:string,
    //     wage:number,
    // ) {
    //     this.empID=empID;
    //     this.empName=empName;
    //     this.wage=wage;
    // }
}