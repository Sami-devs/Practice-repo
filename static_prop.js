class User{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`Username is : ${this.username}`)
    }

    static createId(){     // when we static function so their access stop means it is not access to any user  
        return `${Math.floor((Math.random())*100)}`
    }
}

const sami = new User("sami")
// console.log(sami.createId())
console.log(User.createId())  // static function can only be accessed by class name .

class teacher extends User{
    constructor(username, email){
        super(username)        // super() calls parent constructor
        this.email = email
    }
}

const Iphone = new teacher ("Iphone", "I@phone.com")
Iphone.logMe()