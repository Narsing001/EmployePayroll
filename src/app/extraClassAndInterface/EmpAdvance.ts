export interface Epadvance{
    empName: string
    empContactNo: string
    employeeId: number
    advanceDate: string
    advanceAmount: number
    advanceId: number
    reason: string
}

export class postEpAdvance{
    advanceId!: number
    employeeId!: number
    advanceDate!: Date|null|string
    advanceAmount!:string
    reason!:string;
}