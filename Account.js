class Account {
    #password
    
    constructor(email, password) {
        this.email = email,
        this.#password = password
        this.balance = 100
    }
    
    #auth(email, password) {
        return this.email === email && this.#password === password
    }

    getAccountBalance(email, password) {
        if(this.#auth(email, password)) {
            console.log(this.balance)
        } else {
            console.log("Faça login para continuar")
        }
    }

    sendPix(email, password, amount, acountToReceive) {
        if(this.#auth(email, password)) {
            if(this.balance >= amount) {
                this.balance -= amount
                acountToReceive.balance += amount
                console.log(this.balance)
            } else {
                console.log("Saldo insuficiente")
            }
        } else {
            console.log("Faça login para continuar")
        }
    }
}

const conta1 = new Account("wesley@email.com", "123")
const conta2 = new Account("yasmim@email.com", "123")


conta2.sendPix("yasmim@email.com", "123", 30, conta1)
conta1.getAccountBalance("wesley@email.com", "123")
conta1.sendPix("wesley@email.com", "123", 2, conta2)
conta2.getAccountBalance("yasmim@email.com", "123")