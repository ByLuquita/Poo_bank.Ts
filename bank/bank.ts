export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    private balance: number
    private status: boolean 
 

        constructor(name: string, accountNumber: number, status: boolean){
            this.name = name
            this.accountNumber = accountNumber
            this.balance = 0
            this.status = status
        }

    deposit = (value:number) => {
        
        if(this.validStatus()){
            this.balance = this.balance + value
            this.getName()
            console.log(' depositou', value)
        }


    }
    

    withdraw = (removeValue: number) => {
        if(this.validStatus()){
            this.balance = this.balance - removeValue
        }
        else if(this.balance < removeValue){
            console.log('Valor não disponível para saque')
        
        }
        
        else{console.log('Conta inoperante')}
        
    }

    setName(name:string): void{
        this.name = name
    }

    getName(){
        return this.name
    }

     validStatus():boolean{
        if(this.status){
            return this.status
        }

       else  throw new Error
    }
    
    
    getBalance(){
        return this.balance
    }

    setBalance(  newBalance: number){
        if(this.validStatus()){
        this.balance = this.balance + newBalance
        }
    }

    decreaseBalance(newBalance: number){
        if(this.validStatus()){
        this.balance = this.balance - newBalance
        }
    }

   /* getLoan(newBalance: number) {
        newBalance = newBalance + (newBalance * 30 )/100
        if (this.validStatus()) {
           this.balance = this.balance + newBalance
        }
    }*/
    
}







