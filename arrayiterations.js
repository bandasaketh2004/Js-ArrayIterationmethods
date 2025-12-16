//foreach eg
// let a=[1,2,3,4,5,6]
// a.forEach((item) => {
//     console.log(item)
// });

//map eg
// let data=a.map((item)=>{
//     return item 
//     // return item * 3
// })
// console.log(data); // map will returns the array

//filter eg
// let a=[1,2,3,4,5,6,7,8]
// let data = a.filter((item)=>{
//     return item % 2 == 0;
// })
// console.log(data)

//reduce eg
// let a=[100,300,500,200,600];
// let data=a.reduce((acc,value)=>{
//      return acc+value;
// },0)
// console.log(data);

//find eg
// let a=[1,2,3,4,5];
// let data = a.find((item)=>{
//     return item > 3;
// });
// console.log(data);

//some eg
// let a=[1,2,3,4,5];
// let data= a.some((item)=>{
//     return item > 2;
// });
// console.log(data);

//every eg
// let a=[1,2,3,4,5];
// let data= a.every((item)=>{
//     return item > 0;
// });
// console.log(data);

//sort eg
// let a=[3,1,5,8,2];
// a.sort((a,b) => a-b)
// console.log(a)

//take 5 array of object with id name desc price
//prices sort
//filter based on name
//reduce total bill


//task 
let employee=[{id:1,name:"Saketh",age:21,role:"Developer",location:"Hyderabad",salary:400000},
    {id:2,name:"Siddhu",age:22,role:"DevOps",location:"Banglore",salary:200000},
    {id:3,name:"Ajay",age:22,role:"Sales",location:"Delhi",salary:300000},
    {id:4,name:"Sravan",age:21,role:"Manager",location:"Chennai",salary:506000},
    {id:5,name:"Praveen",age:23,role:"testing",location:"New York",salary:300000}
];

//1
// let data = employee.filter((value)=>{
//     return value.location === "New York" && value.salary > 70000;
// })
// console.log(data)

//2 - using map
// function data(emp){
//     return employee.map(emp => `${emp.name}-${emp.role}`)
// }
// console.log(data(employee))

//3
// let data=employee.reduce((acc,value)=>{
//     return acc+value.salary;
// },0)
// console.log(data)

//4
// let data=employee.sort((a,b)=>{
//     return b.salary-a.salary;
// })
// console.log(data)

//5
function data(empdevops){
   return empdevops.find(emp => emp.role === "DevOps");
}
console.log(data(employee))
