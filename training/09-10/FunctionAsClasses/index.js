 //IIFE - Immediatly Invoked Functional Expressions
(function () {
  console.log("this will be invoked as soon as it is created");
  function Person(name, age) {
    console.log("Person called ", arguments);
    this.name = name;
    this.age = age;
  }

  Person.prototype.isAdult = function () {
    return this.age >= 18;
  };

  let a = new Person("Ankush", 41);

  console.log(a, a.isAdult());

  function Student(name, age, rollNo, marks) {
    // Person.apply(this, arguments);
    Person.call(this, name, age);
    this.rollNo = rollNo;
    this.marks = marks;
    let calcGrades = function (marksInSubject) {
      if (marksInSubject > 85) {
        return "A";
      } else if (marksInSubject > 70) {
        return "B";
      } else if (marksInSubject > 60) {
        return "C";
      } else if (marksInSubject > 50) {
        return "D";
      } else {
        return "F";
      }
    };
    this.grades = this.marks.map((mark) => {
      let sub = Object.keys(mark);
      let value = Object.values(mark);
      return {
        [sub[0]]: calcGrades(value[0]),
      };
    });
  }

  Student.prototype = Object.create(Person.prototype);
  let s = new Student("Rohit", 17, 19, [
    { Math: 90 },
    { Eng: 85 },
    { Phy: 82 },
    { Chem: 76 },
  ]);

  console.log("student", s);
  console.log(s.isAdult());
  //clouser
  function multipiler(multiplier) {
    return function (number) {
      return number * multiplier;
    };
  }

  const sevenMultiples = multipiler(7);
  const nineMultiples = multipiler(9);

  console.log(sevenMultiples(49));
  console.log(sevenMultiples(89));
  console.log(sevenMultiples(79));

  console.log(nineMultiples(69));
  console.log(nineMultiples(94));

})();
