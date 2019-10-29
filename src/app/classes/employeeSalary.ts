
import{SalaryPhaseItem} from './salaryPhaseItem';

export class EmployeeSalary {
    empID: number;
    empName: string;
    wage:number;
    salaryPhaseItem:SalaryPhaseItem[];

    constructor(
        
    ) {
        this.salaryPhaseItem=[];
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