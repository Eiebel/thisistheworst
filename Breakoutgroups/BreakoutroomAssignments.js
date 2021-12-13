/* Create a function called greet
This function should accept 2 parameters (greeting, name)
The function should return a string with a greeting. For example if you give the function the arguments "Good morning" and "Paul" it will return the string "Good Morning Paul"
Console.log and call the function. */

//My attempt

/* function greet(greeting, name){
    console.log(`${greeting}, ${name}`);
}

greet("hello", "Kamala"); */

function greet(greeting, name) {
    return `${greeting} ${name}` //local scope
};

console.log(greet("Oh Hi", "Mark"));

/* Create some code that counts from 0 to 100. 
Create some code that tests if the number is divisible by 3, 5, or 3 & 5.
If it is divisible by 3 print "Fizz"
If it is divisible by 5 print "Buzz"
If it is divisible by 3 & 5 print "FizzBuzz"
If the number is not divisible by any of these, print the number itself. 

function number(0, 100) {
    if(0 > 100) {
        console.log("Wrong Order")
    }
    for(let i = numberStart; i <= numberStart; i++) {
        switch (FizzOrBuzz) {
            case "i % 3===0":
                console.log("Fizzy")
                break;
            case "i % 5===0":
                console.log("Buzz")
                break;
            case "i % 15===0":
                console.log("FizzBuzz")
        }
    }
}

number(0,100) */

function number(numberStart, numberStop) {
    if(numberStart > numberStop) {
        console.log("Wrong Order")
    }
    for(let i = numberStart; i <= numberStop; i++) {
        if (i % 3 === 0 && i % 5 === 0) { //(i % 15 ===0) SRICTEST CONDITION FIRST
            console.log(i, "Fizzbuzz")
        } else if (i % 5===0) {
            console.log(i, "Buzz")
        } else if (i % 3===0) {
            console.log(i, "Fizzy")
        } else {
            console.log(i)
        }
    }
}

number(0, 100)

/* Create a function that accepts the parameters (base, height).
Inside of the function use the parameters to calculate the area of a rectangle (A = base*height)
Console.log the result. */ 

function rectangle(base, height){
    let area = base * height;

    console.log(`The area is ${area}, bitches.`);
};
rectangle(10,20)


/* Create an object named Monsters.
Create three keys in the object containing a monster name
Each monster name key should contain an object including:
   * traits: array containing at least 2 strings
   * size: string
   * description: string
   * dangerous: boolean
   * defeatMethods: an object containing tools to defeat as keys and descriptions of how to use as a string. */

let myMonsters={
    traits:['sarcastic','slow'],
    size: 'large',
    description: 'pretty lazy, not so funny',
    dangerous: false,
    defeatMethods: {
            methodOne: 'Walk away',
            methodTwo: 'Ignore'
        }
};

let showTraits = myMonsters.traits[1];
console.log(showTraits);

let showMethods = myMonsters.defeatMethods.methodOne;
console.log(showMethods);


