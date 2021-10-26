interface IDog {
  bark: () => void;
}

class Dog implements IDog {
  public bark(): void {
    console.log("Woof Woof");
  }
}

type ILangObject = {
  [key: string]: string | number | boolean;
}

interface ILangFileObject {
  [key: string]: ILangObject;
}

const langStrings: ILangFileObject = {
  "en-us": {
    name: "Ankush Sharma",
    age: 40,
    married: true,
    qualfication_history: ['10th','12th','grad','MCA']
  },
};
