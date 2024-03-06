import { DioAccount } from "./bank"

export class ModAccount extends DioAccount{
        constructor(name: string, accountNumber: number, status: boolean ){
        super(name, accountNumber, status)
        }

        deposit = (newBalance:number) => {
            if(this.validStatus()){
                this.setBalance(newBalance + 10)
            }
        }

}