// CODE here for your Lambda Classes
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location; 
    }

    speak() {
        console.log(`Hello my name is ${this.name} I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attrs) {
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning ${subject}`);
    }

    grade(Student, subject) {
        console.log(`${Student.name} recieved a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubject = attrs.favSubject;
        this.grade = attrs.grade;
    }

    listSubjects() {
        this.favSubject.array.forEach(element => {
            console.log(element);
        });
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge() {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class TeamLead extends Instructor {
    constructor(attrs) {
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }

    standUp(webpt9) {
        console.log(`${this.name} announces to ${webpt9} @channel stanby times!`);
    }


}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const mike = new Student({
    name: 'Mike',
    location: 'Ohio',
    age: 59,
    previousBackground: 'Wordpress',
    className: 'IS1907_part_time',
    favSubject: ['Html', 'CSS', 'JavaScript']
});

const james = new TeamLead({
    name: 'James',
    location: 'Bedrock',
    age: 37,
    gradClassName: 'IS1907_part_time',
    favInstructor: 'Fred'
});

console.log(fred);
console.log(mike);
console.log(james);
fred.speak();
mike.speak();
james.speak();