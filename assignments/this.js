/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global or Window Binding: 'This' refers to the window or console object.
* 2. Implicit Binding: 'This' refers to objects that come before preceeding dots when functions are called by them.
* 3. New Binding: 'This' refers to the object thats created and returned by the constructor function.
* 4. Explicit Binding: 'This' refers to the apply or the call method.
*
* write out a code example of each explanation above
*/

// Principle 1

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Forrest");

// Principle 2

const myObj = {
    greeting: 'Whats up?',
    sayHello: function(name) {
      console.log(`${this.greeting} My name's ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Forrest');

// Principle 3

function CoolDude(greeter) {
    this.greeting = 'Hi there, ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const donnie = new CoolDude('Jake');
  const jake = new CoolDude('Donnie');
  
  jake.speak();
  donnie.speak();

// Principle 4

jake.speak.call(donnie); donnie.speak.apply(jake);
