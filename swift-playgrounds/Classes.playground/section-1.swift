import Foundation


// MARK: - Classes

class Player {
    
    // Properties - This is all you need, vars.  You either need to set default values here to avoid the error "Stored property without value prevents synthesized inititalizers", mark the vars as optional, or make sure the var is set from an initializer inside the class.  The var must have a value set in one way or another.  These properties are also known as Stored Properties.
    
    var name : String = "Player Name" // or String?
    var score : Int = 0 // or Int?
    
    
    // Methods - functions of a class.
    func description() -> String {
        return("Player \(name) has a score of \(score)")
    }
}

// instatiate a new player object outside the class
var adam = Player()
adam.name = "Adam Smith"
adam.score = 1000
adam.description()




// MARK: - Classes with Initializers
class Animal {
    
    // declare some properties for the class without default values
    var name : String
    var color : String
    
    func description() -> String {
        return "The \(name) is \(color)"
    }
    
    // Now we initialize the vars inside the class to avoid error.  This is the default initializer
    init() {
        name = ""
        color = ""
    }
    
    // Lets setup a custom initilizer here
    // Self means the current instance of the class
    init(name: String, color: String) {
        self.name = name
        self.color = color
    }
    
    // Optional: add a deinititilizer to end connection to DB or something
    deinit {
        // any necessary cleaup code here
    }
}

var animal = Animal()
animal.description()

var giraffe = Animal(name: "giraffe", color: "orange")
giraffe.description()

var rhino = Animal(name:"rhino", color:"gray")
rhino.description()




// MARK: - Class Inheritance
// Use a colon and specify the class to inherit from (Superclass)
// Colon still means "is of type" player
// The point of this is to extend the functionality of the subclass by overriding methods and initialization

class Bird : Animal {
    
    // add additional properties to the subclass
    var sound: String = ""
    
    // add additional methods
    func chirp() {
        self.sound = "Sqwaak"
        println("The bird goes \(self.sound)")
    }
    
    // override the description method from Player
    override func description() -> String {
        return("The bird has feathers")
    }
    
    // You can also override initialization using
    // override init() {
    //some code
    // }
    
    // In your super class, you can use "final" to make a method unable to override here.  You could also use final on the entire class
}

// objects of this new class have access to all methods from Player, and the new ones we just declared also.

var tweety = Bird()
tweety.description()
tweety.chirp()




// MARK: - Computed Properties
// Computed properties are properties that are a calculation or created from existing properties.

class Person {
    
    // Stored Properties
    var firstName : String
    var lastName : String
    var prefix : String
    
    // Computed Properties
    var name : String {
        
        return firstName + " " + lastName
        
    } // This computed property is an implied read-only (get statement).  You can omit the explicit get statement.
    
    
    var formalName : String {
        get {
            return prefix + " " + lastName + ", " + firstName
        } // explicit get statement
        
       set {
            var nameArray = newValue.componentsSeparatedByString(" ")
            firstName = nameArray[1]
            lastName = nameArray[2]
            prefix = nameArray[0]
            
        } // set statement to split "newValue" that is created and save them in the stored properties
    }
    
    init() {
        firstName = "John"
        lastName = "Doe"
        prefix = ""
    }
}


var john = Person()

var george = Person()
george.prefix = "Mr."
george.firstName = "George"
george.lastName = "Jung"

println(george.formalName)  // the formalName property is computed!




// MARK: - Type Properties and Methods (Class Level)
// Properties accessible at the class level, in this example an interest rate that is applied to every bank account

class BankAccount {
    
    // Regular stored properties
    let accountNumber : Int
    let routing = 600021
    var balance : Double
    
    // lets add a class level property, or type property (implied getter)
    class var interestRate : Float {
        return 3.14
    }
    
    init(num : Int, startingBalance : Double){
        self.accountNumber = num
        self.balance = startingBalance
    }
}

// Get the interest rate from the class.  
// This property exists for the entire class, and all instances of the class.

BankAccount.interestRate


var adamBank = BankAccount(num: 564543674576, startingBalance: 2000.00)
adamBank.accountNumber
adamBank.balance
adamBank.routing

// You cannot set or get the interest rate from an instance
// adamBank.interestRate (ERROR)




// MARK: - Lazy Properties
// Sometimes giving a value to every variable as soon as an object is instatiated can be a waste of resources,
// or is simply not necessary.  Lazy properties allow you to set/get properties only when needed.


func getScore() -> Int {
    println("Performing resource heavy task..")
    return random()
}

class FirstPlayer {
    
    lazy var score = getScore()
    
    func firstPlayerScore() -> String {
        return("First Player has a score of \(score)")
    }
    
}

// Try without lazy loading by removing lazy above, and commenting the println below
var first = FirstPlayer()

println(first.firstPlayerScore())
