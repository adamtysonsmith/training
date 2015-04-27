/* Swift Programming Language First Look by Simon Allardice */
/* Swift Programming Essential Training by Simon Allardice */


// Chapter 1: Variables ------------------------------------------------------------------
// MARK: - Variables
// Every variable in swift must be declared with the var keyword, always
// All variables are of a specific data type.  Swift infers the type, or you declare it

var highscore = 1000
var stringBean = "This is a string variable"

var declaredBool : Bool //this is called type annotation
declaredBool = true

var declaredString : String
declaredString = "Stringy Beanie"

var declaredInteger : Int
declaredInteger = 28

var red, green, blue : String
red = "War"
green = "Envy"
blue = "Sad"

var letter : Character = "a"




// Chapter 2: Constants ------------------------------------------------------------------
// MARK: - Constants

let π = 3.14159

let daysInWeek = 7

let interestRate : Float = 4.5 //Constants must be declared on creation
interestRate


// Note on Mutability
// In Objective C, it is common to have 2 versions of a class; NSMutableArray and NSArray
// In Swift its much simpler; If created with var, its variable/mutable.  If created with let, its constant/immutable.





// Chapter 3: Printing to Console and String Interpolation ---------------------------------
// MARK: - String Interpolation

println("This is a string!")

println("If you go to \(red), you will breed \(green) and \(blue)ness")

println("There are \(daysInWeek) days in the week")

var quantity = 19
var unitPrice = 25

println("The total cost is $\(quantity * unitPrice).00")

// You cannot perform math on variables with different data types
// This will fail:
// println("\(quantity * red)")
// You can use a function to CONVERT the data type like below, with the Double() function.  You can also use Int(), String(), and more.

var apples = 99
var priceOfApple = 0.99

println("The price of \(apples) apples is \(Double(apples) * priceOfApple)")

println("I have \(apples) apples")








// Chapter 4: If Statements -----------------------------------------------------------------
// MARK: - If Statements


if apples != 50 {
    println("You do not need parenthesis in the condition! Apples are greater than 50.  Operators include != == > <")
} else {
    println("Conditions must evalute true or false. Apples are less than 50")
}

if (apples > 98 && priceOfApple == 0.99) {
    println("See you can use && or || just like JavaScript")
} else if apples != 90 {
    println("And you can use parenthesis if you want to make it readable")
}







// Chapter 5: Switch Statements --------------------------------------------------------------
// MARK: - Switch Statements

let windspeed = 10
let tornado = "F5"

switch windspeed {
    case 0...1: println("Wind speed is \(windspeed)")
    case 2...4: println("Wind speed is \(windspeed)")
    case 5...7: println("Wind speed is \(windspeed)")
    case 8...10: println("Wind speed is \(windspeed)")
    case 11...12: println("Wind speed is \(windspeed)")
    case 13...15: println("Wind speed is \(windspeed)")
   default: println("Wind speed is unknown")
}

switch tornado {
    case "F1": println("Tornado is \(tornado)")
    case "F2": println("Tornado is \(tornado)")
    case "F3": println("Tornado is \(tornado)")
    case "F4": println("Tornado is \(tornado)")
    case "F5": println("Tornado is an \(tornado)")
   default: break
}

// Notice that you do not need to break every case like in JavaScript
// There is no such thing as fallthrough, every case must be defined
// You can case number ranges like ... or ..< to get one less than the last #, used for arrays
// You must use default statement to break out, can use break keyword or you can do something







// Chapter 6: Loops --------------------------------------------------------------------------
// MARK: - Loops

var alphabet = "abcdefghijklmnopqrstuvwxyz"

for letter in alphabet {
    println("\(letter)")
    println("\(alphabet)")
}

// Notice the behavior above, it alternates!
// You can use any "index" to iterate, letter or i or idx
// You can iterate over an array, dictionary, string or range of numbers for example

// Good way to illustrate this loop
// for "each" in "object" {
       // do something "each" number of times to the object
// }







// Chapter 7: Functions
// MARK: - Functions

// Basic Function
func myFunction() {
    println("We're in the function!")
}

myFunction()

// Function with Return Type
func funkyFunction() -> String {
    return "I return a string"
}

funkyFunction()


//Specify the data type of the parameter, all parameters are constant by default
func conParam(banana: String) -> String {
    return banana
}

conParam("I am a banana")


// This is how you can change the parameter inside the function, by explicitly declaring "Mutable" var
func varParam(var lola: String) -> String {
    var lola = "Coca Cola"
    return lola
}

varParam("La la la Lola")
varParam("Hey Im a parameter!")


// Declare a function with multiple params
func multiParam(nummy: Int, stringy: String) {
    println("\(stringy) and \(nummy)")
}

multiParam(6, "Holy Cow")


// Functions with default parameters (param with default value set) this is common in class methods
func defParam(name: String = "Adam") -> String {
    return name
}

defParam()
defParam(name: "George of the Jungle")

// defParam("Jake the Snake") This will throw an error like hell

// Notice that you must call the function with the named parameter if it has a default value that you want to change.  Xcode gives you helpful code hinting to remember








// Chapter 8: Arrays
// MARK: - Arrays
// All arrays are zero based, and the type is defined.  You cannot mix data types in arrays
// Arrays are mutable when declared var, immuntable when declared let

let daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]

var colorOptions = ["Red","Green","Blue"]


// Declare an Array without values, an array of the string type
var flavors : [String]
flavors = ["Vanilla","Strawberry","Chocolate"]

// Print an array item using the index
println(flavors[0])

// Set the array item using index
flavors[0] = "Tahitian Vanilla Bean"
println(flavors[0])

// Adding items to your array, long version and shorthand
flavors.append("Mint Chocolate Chip")
flavors += ["Rocky Road"]

println(flavors)

// Add items at a specific postiion in the array, must use named param here for insert
flavors.insert("Coconut",atIndex:4)
println(flavors[4])


// Removing items from the array
flavors.removeLast()
flavors.removeAtIndex(4)

// How many items in the array?
println("There are \(daysInMonth.count) items")

flavors.count

// Check if the array is empty
if flavors.isEmpty {
    println("No Flavors here")
} else {
    println("The flavors are \(flavors)")
}

// Iterating over arrays with for in loop, very easy

for flavor in flavors {
    println("\(flavor)")
}








// Dictionaries!
// MARK: - Dictionaries

var states = ["AZ" : "Arizona", "CA" : "California", "NY" : "New York"]

states["FL"] = "Florida" // will change or insert new pair
println(states)
println(states["FL"])

states["AZ"] = nil // this removes the entire k/v pair from the dictionary
println(states)

// Declare dictionary with String Keys and Int values
var remoteCodes : [String:Int]

remoteCodes = ["Sony" : 126, "Samsung" : 542]







// Chapter 11: Optionals ---------------------------------------------------------------------
// MARK: - Optionals

var temp : Int?
var tempe : String? = "REALLY REALLY HOT"
println("The temperature is currently \(temp)")

// If we did not use an optional, we would get compile error
//var temperature : Int
//println("The temperature is currently \(temperature)")
// Optionals allow us the flexibility to say to the user, "Sorry we could not get the temp, its Nil" Then later in the program you would set the temp and print it:

temp = 78
println("The temperature is currently \(temp)")

// Notice the weird print statement? Get rid of the Optional(78) by using forced unwrapping.  You can only use forced unwrapping if you are sure that a value exists, otherwise error.

println("The temperature is currently \(temp!)")

// Better idea would be to use logic in this situation:

if tempe != nil {
    println("The temperature is currently \(tempe!)")
} else {
    println("No value for temp")
}



