import  {CompanyAccount} from './bank/company_acc'
import  {PeopleAccount} from './bank/people_acc'
import { ModAccount } from './bank/modifiedacc'




const companyAccount = new CompanyAccount('MCTECH', 0, true, 20)


const peopleAccount = new PeopleAccount(0,'fernanda', 3, true)
const modifiedAcc = new ModAccount('fernanda', 0, true)




peopleAccount.deposit(150)
peopleAccount.withdraw(10)
//companyAccount.getLoan(300)
console.log(peopleAccount.getBalance())