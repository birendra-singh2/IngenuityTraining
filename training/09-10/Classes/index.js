"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.isAdult = function () {
        return this.age >= 18;
    };
    return Person;
}());
var a = new Person("Ankush", 41);
console.log("Person ", a);
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, _rollNo, _marks) {
        var _this = _super.call(this, name, age) || this;
        _this._rollNo = _rollNo;
        _this._marks = _marks;
        _this._grades = _marks.map(function (mark) {
            var _a;
            var sub = Object.keys(mark);
            return _a = {},
                _a[sub[0]] = _this.calcGrades(mark[sub[0]]),
                _a;
        });
        return _this;
    }
    Object.defineProperty(Student.prototype, "rollNo", {
        get: function () {
            return this._rollNo;
        },
        set: function (value) {
            this._rollNo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "marks", {
        get: function () {
            return this._marks;
        },
        set: function (value) {
            this._marks = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "grades", {
        get: function () {
            return this._grades;
        },
        set: function (value) {
            this._grades = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.calcGrades = function (marks) {
        if (marks > 85) {
            return "A";
        }
        else if (marks > 70) {
            return "B";
        }
        else if (marks > 60) {
            return "C";
        }
        else if (marks > 50) {
            return "D";
        }
        else {
            return "F";
        }
    };
    return Student;
}(Person));
var s = new Student("Rohit", 17, 19, [
    { Math: 90 },
    { Eng: 85 },
    { Phy: 82 },
    { Chem: 76 },
]);
console.log("Student ", s, s.isAdult());
