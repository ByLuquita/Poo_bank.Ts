import { DioAccount } from "./bank"
export class CompanyAccount extends DioAccount{
    
    
    constructor(name: string, accountNumber: number, status: boolean, balance: number){
        super( name, accountNumber, status)

      
    }
    
    
   

    deposit = (newBalance:number) => {
       
            if(this.validStatus()){
                this.setBalance(newBalance)
            }
        
        console.log('a empresa fez um depósito')
    }


    withdraw = (newBalance: number) => {
        if(this.getBalance() < newBalance){
            console.log('Este valor não está disponível para saque')
        }
        else if (this.validStatus()){
            this.decreaseBalance(newBalance)
        }
        else{
            console.log('conta desativada')
        }
    }


    getLoan(loaned: number) {
        loaned = loaned + (loaned * 0.3)
        if (this.validStatus()) {
            this.setBalance(loaned)
        }
        else{
            console.log('Conta suspensa')
        }
    }
    

    

    

    }
    

