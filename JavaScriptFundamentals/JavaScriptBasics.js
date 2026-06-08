class JavaScriptBasics {
    // instance variable 
// 1. VARIABLES
// Variables store data
// camel case for functions 
// class pascal case for class name

async learnVariables() {

    // Creates a variable using var and prints its value.
    // var is the older way of declaring variables in JavaScript.

    var company = "OpenAI";
    console.log(company);
}

// 2. LET
// let can be reassigned
async learnLet() {

    // Creates a variable whose value can be changed later.
    // let is block-scoped and commonly used in modern JavaScript.

    let name = "Nitin";
    name = "Puneet";

    console.log(name);
}

// 3. CONST
// const cannot be reassigned
async learnConst() {

    // Creates a constant value that cannot be reassigned.
    // Use const when the reference should remain unchanged.

    const country = "India";

    console.log(country);
}

// 4. DATA TYPES
async learnDataTypes() {

    // Demonstrates common JavaScript data types and
    // uses typeof to determine the type of each variable.

    let name = "Nitin";
    let age = 30;
    let isActive = true;
    // String name = "Nitin";
   // int age = 30;
    //  boolean isActive = true;

    console.log(typeof name);
    console.log(typeof age);
    console.log(typeof isActive);
}

// 5. STRING
async learnString() {

    // Demonstrates commonly used string operations
    // such as length, uppercase and lowercase conversion.

    const name = "Gurwinder";

    console.log(name.length);
    console.log(name.toUpperCase());
    console.log(name.toLowerCase());
}

// 6. TEMPLATE LITERALS
async learnTemplateLiterals() {

    // Uses template literals (backticks) to embed
    // variables directly inside strings.

    const name = "Nitin";

    console.log(`Welcome ${name}`);
}

// 7. NUMBER
async learnNumber() {

    // Demonstrates arithmetic operations using numbers.

    const num1 = 10;
    const num2 = 20;

    console.log(num1 + num2);
}

// 8. BOOLEAN
async learnBoolean() {

    // Demonstrates a boolean value which can be
    // either true or false.

    const isLoggedIn = true;

    console.log(isLoggedIn);
}

// 9. ARRAY
async learnArray() {

    // Creates an array and accesses elements
    // using their index position.

    const users = ["Nitin", "Puneet", "Gurwinder"];

    console.log(users);
    console.log(users[0]);
}

// 10. ARRAY PUSH
async learnArrayPush() {

    // Adds a new element to the end of an array
    // using the push() method.

    const users = ["Nitin"];

    users.push("Puneet");

    console.log(users);
}

// 11. ARRAY POP
async learnArrayPop() {

    // Removes the last element from an array
    // using the pop() method.

    const users = ["Nitin", "Puneet"];

    users.pop();

    console.log(users);
}

// 12. OBJECT
async learnObject() {

    // Creates an object with key-value pairs
    // and accesses properties using dot notation.

    const employee = {
        id: 101,
        name: "Nitin",
        city: "Chandigarh"
    };

    console.log(employee.name);
    console.log(employee.city);
}

// 13. IF ELSE
async learnIfElse() {

    // Executes different blocks of code
    // based on a condition.

    const age = 20;

    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Minor");
    }
}

// 14. SWITCH
async learnSwitch() {

    // Evaluates multiple possible values
    // and executes the matching case.

    const browser = "chrome";

    switch (browser) {
        case "chrome":
            console.log("Launching Chrome");
            break;

        case "firefox":
            console.log("Launching Firefox");
            break;

        default:
            console.log("Unknown Browser");
    }
}

// 15. FOR LOOP
async learnForLoop() {

    // Repeats a block of code a fixed
    // number of times.

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

// 16. WHILE LOOP
async learnWhileLoop() {

    // Repeats code while the condition
    // remains true.

    let i = 1;

    while (i <= 5) {
        console.log(i);
        i++;
    }
}

// 17. DO WHILE LOOP
async learnDoWhileLoop() {

    // Executes the code at least once
    // before checking the condition.

    let i = 1;

    do {
        console.log(i);
        i++;
    } while (i <= 5);
}

// 18. BREAK
async learnBreak() {

    // Stops loop execution immediately
    // when the condition is met.

    for (let i = 1; i <= 10; i++) {

        if (i === 5) {
            break;
        }

        console.log(i);
    }
}

// 19. CONTINUE
async learnContinue() {

    // Skips the current iteration and
    // moves to the next iteration.

    for (let i = 1; i <= 5; i++) {

        if (i === 3) {
            continue;
        }

        console.log(i);
    }
}

// 20. FUNCTION
async learnFunction() {

    // Creates a reusable function that
    // accepts parameters and returns a value.

    function add(a, b) {
        return a + b;
    }

    console.log(add(10, 20));
}

// 21. ARROW FUNCTION
async learnArrowFunction() {

    // Demonstrates the modern shorthand syntax
    // for writing functions.

    const add = (a, b) => a + b;

    console.log(add(5, 10));
}

// 22. FOR OF
// Best loop for Playwright arrays
async learnForOf() {

    // Iterates directly over array values.
    // Commonly used in Playwright automation.

    const users = ["Nitin", "Puneet", "Gurwinder"];

    for (const user of users) {
        console.log(user);
    }
}

// 23. FOR EACH
async learnForEach() {

    // Executes a callback function for
    // every element in an array.

    const users = ["Nitin", "Puneet", "Gurwinder"];

    users.forEach(user => {
        console.log(user);
    });
}

// 24. SET
// Removes duplicates
async learnSet() {

    // Uses Set to keep only unique values
    // and remove duplicates from an array.

    const numbers = [1, 1, 2, 2, 3, 3];

    const uniqueNumbers = [...new Set(numbers)];

    console.log(uniqueNumbers);
}

// 25. MAP COLLECTION
// Stores key-value pairs
async learnMapCollection() {

    // Demonstrates the Map collection which stores
    // data as key-value pairs and provides lookup methods.

    const employeeMap = new Map();

    employeeMap.set("name", "Nitin");
    employeeMap.set("city", "Chandigarh");

    console.log(employeeMap.get("name"));
    console.log(employeeMap.get("city"));
}
}

// Create object of the class
const js = new JavaScriptBasics();

// Execute all methods
(async () => {
    await js.learnVariables();
    await js.learnLet();
    await js.learnConst();
    await js.learnDataTypes();
    await js.learnString();
    await js.learnTemplateLiterals();
    await js.learnNumber();
    await js.learnBoolean();
    await js.learnArray();
    await js.learnArrayPush();
    await js.learnArrayPop();
    await js.learnObject();
    await js.learnIfElse();
    await js.learnSwitch();
    await js.learnForLoop();
    await js.learnWhileLoop();
    await js.learnDoWhileLoop();
    await js.learnBreak();
    await js.learnContinue();
    await js.learnFunction();
    await js.learnArrowFunction();
    await js.learnForOf();
    await js.learnForEach();
    await js.learnSet();
    await js.learnMapCollection();
})();