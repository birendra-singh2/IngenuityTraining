class xyz{
method():void{
console.log("i am constructor");
showDetails(name:string):void
{
  console.log(name); 
} 
showDetails(empId:number):void
{
  console.log(empId); 
}
}
}
var obj=new xyz();
obj.method();
obj.showDetails("Jai"); 
obj.showDetails(123);