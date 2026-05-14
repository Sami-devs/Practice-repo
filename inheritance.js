class User {
    constructor(username){
        this.username = username
    }
    logIn(){
        console.log(`username is: ${this.username}`)
    }
}

class teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}` )
    }
}

const program = new User("sami")
program.logIn()
// program.addCourse()   // give error bcz father dont have the properties of child but child have the properties of father

const code = new teacher("sami", "sami@gmail.com", "@123")
code.addCourse()
code.logIn()

console.log(code instanceof teacher)
console.log(program instanceof User)