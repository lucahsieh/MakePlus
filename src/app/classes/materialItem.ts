export class MaterialItem {
    phaseID: number;
    phaseName:string;
    budget: number;
    actual: number;
    impact: string;

    constructor(
        phaseID: number,
        phaseName:string,
        budget:number,
        actual:number,
        impact:string
    ){
        this.phaseID=phaseID;
        this.phaseName=phaseName;
        this.actual=actual;
        this.budget=budget;
        this.impact=impact;
    }
}