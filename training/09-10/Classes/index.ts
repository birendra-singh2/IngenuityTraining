class Person {
  protected name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public isAdult(): boolean {
    return this.age >= 18;
  }
}

const a = new Person("Ankush", 41);
console.log("Person ", a);
type TMarks = { [key: string]: number };
type TGrades = { [key: string]: string };
interface IStudent {
  marks: TMarks[];
  grades: TGrades[];
}

class Student extends Person implements IStudent {
  public get rollNo(): number {
    return this._rollNo;
  }
  public set rollNo(value: number) {
    this._rollNo = value;
  }
  public get marks(): TMarks[] {
    return this._marks;
  }
  public set marks(value: TMarks[]) {
    this._marks = value;
  }
  private _grades: TGrades[];
  public get grades(): TGrades[] {
    return this._grades;
  }
  public set grades(value: TGrades[]) {
    this._grades = value;
  }
  constructor(
    name: string,
    age: number,
    private _rollNo: number,
    private _marks: TMarks[]
  ) {
    super(name, age);
    this._grades = _marks.map((mark) => {
      let sub = Object.keys(mark);
      return {
        [sub[0]]: this.calcGrades(mark[sub[0]]),
      };
    });
  }

  private calcGrades(marks: number): string {
    if (marks > 85) {
      return "A";
    } else if (marks > 70) {
      return "B";
    } else if (marks > 60) {
      return "C";
    } else if (marks > 50) {
      return "D";
    } else {
      return "F";
    }
  }
}

const s = new Student("Rohit", 17, 19, [
  { Math: 90 },
  { Eng: 85 },
  { Phy: 82 },
  { Chem: 76 },
]);
console.log("Student ", s, s.isAdult());
