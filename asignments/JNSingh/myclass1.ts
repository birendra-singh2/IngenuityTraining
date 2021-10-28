class Employee { 
   name:string
 constructor(name:string)
{
this.name=name;
}
display(): void
{
console.log(" my name is:" + this.name);
}
}
var obj=new Employee("jnsingh");
obj.display();
