/* The for principles of "this" ; (reference an object without having to refer to that object’s name.
Overview)
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: if u dont have varable to refer to , "this will select the global object (everything in html)"
* 2. Implicit Binding : inside an object it has key and the this key gives me the value of {object name)
* 3. New binding: inside of constructuer funced used to refer to the child inside a parent ( make new object)
* 4. Explicit binding: 

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function myschool(name){
    console.log(this);
    return "wellcome to: " + name;
  }
 
  myschool("Lambda");

// Principle 2

// code example for Implicit Binding

const student = {
    schoolname: 'Lambda School',
    greeting: function(name){
      console.log(`Wellcome ${name} to ${this.schoolname} ..!`);
      console.log(this)
  
    }
  }
  student.greeting('Faisal');

// Principle 3 (con fun)

// code example for New Binding

function student3(name) {
    this.name = name;
    this.schoolname = "Lambda School";
    this.great = function() {
      console.log(`Hello ${this.name} for your first day in ${this.schoolname}`);
      console.log(this)
    }
  } 
  const studentName = new student3("Faisal")
  studentName.great();

// Principle 4

// code example for Explicit Binding

function student4(name) {
    this.name = name;
    this.schoolname = "Lambda School";
    this.great = function() {
      console.log(`Hello ${this.name} for your first day in ${this.schoolname}`);
      console.log(this)
    }
  } 
  const studentName1 = new student4("Faisal")
  studentName.great();

  
  const studentName2 = new student4("Vick")
  studentName2.great();


  studentName1.great.call(studentName2);
  studentName2.great.call(studentName1)