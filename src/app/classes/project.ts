import{Employee}from './employee';
import{WorkloadItem} from './workloadItem';
import{SalaryItem} from './salaryItem';
import{PhaseItem}from './phaseItem';
import{InvoiceItem} from './invoiceItem';
import{MaterialItem} from './materialItem';

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
    salaryArr:SalaryItem[];

    //material
    material:MaterialItem[];

    constructor(){}
}