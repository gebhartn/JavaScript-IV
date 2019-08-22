// CODE here for your Lambda Classes

class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.location = obj.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

// Now that we have a Person as our base class, we'll build our Instructor class.
// Instructor uses the same attributes that have been set up by Person
// Instructor has the following unique props:
// specialty what the Instructor is good at i.e. 'redux'
// favLanguage i.e. 'JavaScript, Python, Elm etc.'
// catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
// demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
  constructor(obj) {
    super(obj);
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;
  }
  demo(str) {
    console.log(`Today we are learning about ${str}`);
  }
  grade(obj, str) {
    console.log(`${obj.name} receives a perfect score on ${str}`);
  }
}

// Now we need some students!
// Student uses the same attributes that have been set up by Person
// Student has the following unique props:
// previousBackground i.e. what the Student used to do before Lambda School
// className i.e. CS132
// favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// Student has the following methods:
// listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
// PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
// sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}

class Student extends Person {
  constructor(obj) {
    super(obj);
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
  }
  listsSubjects() {
    for (x in this.favSubjects) {
      console.log(x);
    }
  }
  PRAssinment(str) {
    console.log(`${this.name} has submitted a PR for ${str}`);
  }
  sprintChallenge(str) {
    console.log(`${this.name} has begun a sprint challenge on ${str}`);
  }
}
