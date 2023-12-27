console.log('___________Abstraction___________');
//Abstraction is hiding implementation and showing  Functionality to the users.
function BankAccount(accountNumber, accountHolder) {
    let _accountNumber = accountNumber;
    let _accountHolder = accountHolder;
    let _balance = 0;

    //public methods to interact with the account
    return {
        getAccountNumber: function () {
            return _accountNumber;
        },
        getAccountHolder: function () {
            return _accountHolder;
        },
        getBalance: function () {
            return _balance;
        },
        deposit: function (amount) {
            _balance += amount;
            console.log(`Deposited ${amount} into account ${_accountNumber}`);
        },
        withdraw: function (amount) {
            if (_balance >= amount) {
                _balance -= amount;
                console.log(`Withdrawn ${amount} from account ${_accountNumber}`);
            } else
                console.log("Insufficient Funds");
        }
    };
};
// Creating an instance for BankAccount Function
let myAccount = BankAccount('1234567890', 'John Doe');
// console.log("Account Holder : ",_accountHolder); // Cant access 

// Interacting with the account using public methods
console.log("Account Holder : ",myAccount.getAccountHolder());
console.log("Account Number : ",myAccount.getAccountNumber());
console.log("Initial Balance : ",myAccount.getBalance());

myAccount.deposit(1000);
console.log("Balance after deposit : ", myAccount.getBalance());

myAccount.withdraw(500);
console.log("Balance after withdraw : ",myAccount.getBalance());

myAccount.withdraw(1000);
console.log("Final Balance : ",myAccount.getBalance());