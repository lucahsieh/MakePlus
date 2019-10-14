export class MaterialItem {
    phaseID: number;
    budget: number;
    actual: number;
    impact: string;

    constructor(
        phaseID: number,
    ){
        this.phaseID=phaseID;
    }
}