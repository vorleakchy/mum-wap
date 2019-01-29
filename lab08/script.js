/* Exercise 1 */
(function() {
    "use strict";

    String.prototype.filter = function(...bannedWords) {
        let words = this.split(' ');

        bannedWords.forEach((bannedWord) =>
        words = words.filter((word) => word !== bannedWord));

        return words.join(' ');
    };

    console.log("----- Exercise 1 -----");
    console.log("This house is not nice!".filter('not'));

})();



/* Exercise 2 */
(function() {
    "use strict";

    Array.prototype.bubbleSort = function() {
        let array = this;

        for(var i = 0; i < array.length; i++) {
            for(var j = 1; j < array.length; j++) {
                if(array[j - 1] > array[j]) {
                    let temp = array[j - 1];
                    array[j - 1] = array[j];
                    array[j] = temp;
                }
            }
        }

        return array;
    };

    console.log("\n----- Exercise 2 -----");
    console.log([6,4,0, 3,-2,1].bubbleSort());
})();



/* Exercise 3 */
(function() {
    "use strict";

    function Person(name) {
        this.name = name;
    }

    Person.prototype.teach = function(subject) {
        console.log(this.name + " is now teaching " + subject);
    };

    console.log("\n----- Exercise 3, Part 1 -----");
    const teacher = new Person("Prof. Levi");
    teacher.teach("WAP");
})();

(function() {
    "use strict";

    const protoPerson = {
        name: 'unknown',
        teach: function(subject) {
            console.log(this.name + " is now teaching " + subject);
        }
    };

    function personFactory(name) {
        const person = Object.create(protoPerson);
        person.name = name;

        return person;
    }

    console.log("\n----- Exercise 3, Part 2 -----");
    const teacher = personFactory("Prof. Levi");
    teacher.teach("WAP");
})();

/* Exercise 4 */
(function() {
    "use strict";

    const protoPerson = {
        name: "unknown",
        age: 0,
        greet: function() {
            console.log("Greetings, my name is " + this.name + " and I am" +
                this.age + " years old.");
        },
        salute: function() {
            console.log("Good morning!, and in case I dont see you, " +
                "good afternoon, good evening and good night!");
        }
    };

    const protoStudent = Object.create(protoPerson);
    protoStudent.major = "unknown";
    protoStudent.greet = function() {
        console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
    };

    function studentFactory(name, age, major) {
        const student = Object.create(protoStudent);
        student.name = name;
        student.age = age;
        student.major = major;
        return student;
    }

    const protoProfessor = Object.create(protoPerson);
    protoProfessor.department = "unknown";
    protoProfessor.greet = function() {
        console.log("Good day," + "my name is " + this.name +
            " and I am in the " + this.department + " department.");
    };

    function professorFactory(name, age, department) {
        const professor = Object.create(protoProfessor);
        professor.name = name;
        professor.age = age;
        professor.department = department;
        return professor;
    }

    console.log("\n----- Exercise 4, Prototype Object -----");

    const student = studentFactory("John", 26, "WAP");
    student.greet();
    student.salute();

    const professor = professorFactory("Prof. Levi", 50, "Computer Science");
    professor.greet();
    professor.salute();
})();


(function() {
    "use strict";

    const Person = function(name, age) {
        this.name = name;
        this.age  = age;
    };
    Person.prototype.greet = function() {
        console.log("Greetings, my name is " + this.name + " and I am" +
            this.age + " years old.");
    };
    Person.prototype.salute = function() {
        console.log("Good morning!, and in case I dont see you, " +
            "good afternoon, good evening and good night!");
    };

    const Student = function(name, age, major) {
        this.major = major;
        Person.call(this, name, age);
    };
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.greet = function() {
        console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
    };

    console.log("\n----- Exercise 4, Function Constructor -----");

    const student = new Student("John", 26, "WAP");
    student.greet();
    student.salute();

    const Professor = function(name, age, department) {
        this.department = department;
        Person.call(this, name, age);
    };
    Professor.prototype = Object.create(Person.prototype);
    Professor.prototype.greet = function() {
        console.log("Good day," + "my name is " + this.name +
            " and I am in the " + this.department + " department.");
    };

    const professor = new Professor("Prof. Levi", 50, "Computer Science");
    professor.greet();
    professor.salute();
})();


/* Exerice 4, Try ES6 */
(function() {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age  = age;
        }
        greet() {
            console.log("Greetings, my name is " + this.name + " and I am" +
                this.age + " years old.");
        }
        salute() {
            console.log("Good morning!, and in case I dont see you, " +
                "good afternoon, good evening and good night!");
        }
    }

    class Student extends Person {
        constructor(name, age, major) {
            super(name, age);
            this.major = major;
        }
        greet() {
            console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
        }
    }

    class Professor extends Person {
        constructor(name, age, department) {
            super(name, age);
            this.department = department;
        }
        greet() {
            console.log("Good day," + "my name is " + this.name +
                " and I am in the " + this.department + " department.");
        }
    }

    console.log("\n----- Exercise 4, Try ES6 -----");

    const student = new Student("John", 26, 'WAP');
    student.greet();
    student.salute();

    const professor = new Professor("Prof. Levi");
    professor.department = "Computer Science";
    professor.greet();
    professor.salute();
})();
