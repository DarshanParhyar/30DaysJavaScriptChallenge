class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log("Insufficient funds.");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new Account(100);
account.deposit(50);
account.withdraw(30);
account.withdraw(150);
