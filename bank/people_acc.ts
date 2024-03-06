import { DioAccount } from "./bank"
export class PeopleAccount extends DioAccount {
   readonly Id: number

        constructor(Id: number, name:string, accountNumber:number, status: boolean){
            super(name, accountNumber, status = true)
            this.Id = Id
        
        
         
    }
}

console.log(PeopleAccount)