export class SalaryItem {
    phaseID: number;
    empID: number;
    budgetHr: number;
    budget: number;
    actualHr: number;
    actual: number;
    impact: number;
    empName: string;
    wage:number;


    constructor(
        phaseID: number,
        empID: number,
        empName:string,
        wage:number,
    ) {
        this.phaseID=phaseID;
        this.empID=empID;
        this.empName=empName;
        this.wage=wage;

        this.budgetHr = Math.floor(Math.random() * 100) + 1 ;
        this.budget = wage * this.budgetHr;
    }
}