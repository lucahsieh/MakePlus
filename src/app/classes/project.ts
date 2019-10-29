import{Employee}from './employee';
import{WorkloadItem} from './workloadItem';
import{SalaryPhaseItem} from './salaryPhaseItem';
import{PhaseItem}from './phaseItem';
import{InvoiceItem} from './invoiceItem';
import{MaterialItem} from './materialItem';
import { EmployeeSalary } from './employeeSalary';

export class Project{
    //project detail
    ID : number;
    Name:string;
    desc:string;
    salaryBudget:number;
    totalInvoice:number;
    materialBudget:number;
    spendToDate:number;
    startDate:Date;
    endDate:Date;
    completion:number;
    recoredStoredCompleted:number;
    businessCode:string;
    isProposal:boolean;
    costMultiplier:number;
    isUnderISO13485:boolean;

    //quality system
    progressSurveySent:boolean;
    progressSurveyRsult:boolean;
    followupSurveySent:boolean;
    followupSurveyResult:boolean;

    //team member
    lead:Employee[];
    member:Employee[];

    //phase
    phaseArr: PhaseItem[];

    //invoice
    invoiceArr: InvoiceItem[];

    //workload
    workloadArr:WorkloadItem[];

    //salary
    employeeSalary:EmployeeSalary[];

    //material
    material:MaterialItem[];

    constructor(){
        this.employeeSalary=[];
    }
}