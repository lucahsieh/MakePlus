export class PhaseItem{
    phaseID:number;
    name:string;
    startDate:Date;
    endDate:Date;
    recordDone:boolean;
    predicted:number;
    actual:number;
    impact:string;

    constructor(
        phaseID:number,
        name:string,
        startDate:Date,
        endDate:Date,
    ){
        this.phaseID=phaseID;
        this.name=name;
        this.startDate=startDate;
        this.endDate=endDate;
    }
}